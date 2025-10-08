import { test, expect } from "@playwright/test";
import { error } from "console";
import * as dotenv from "dotenv";
dotenv.config();

const baseURL = "https://reqres.in";

test("GET List User", async ({ request }) => {
  await request
    .get(`${baseURL}/api/users?page=2`, {
      headers: {
        "x-api-key": process.env["x-api-key"] || "",
      },
    })
    .then((response) => {
      expect(response.status()).toBe(200);
      response.json().then((data) => {
        expect(data.page).toBe(2);
        expect(data.per_page).toBe(6);
        expect(data.total).toBe(12);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

test("GET Single User", async ({ request }) => {
  await request
    .get(`${baseURL}/api/users/2`, {
      headers: {
        "x-api-key": process.env["x-api-key"] || "",
      },
    })
    .then((response) => {
      expect(response.status()).toBe(200);
      response.json().then((data) => {
        expect(data.data.id).toBe(2);
        expect(data.data.email).toBe("janet.weaver@reqres.in");
        expect(data.data.first_name).toBe("Janet");
        expect(data.data.last_name).toBe("Weaver");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

test("POST Create User", async ({ request }) => {
  await request
    .post(`${baseURL}/api/users`, {
      data: {
        name: "Zamzam",
        job: "QA Engineer",
      },
      headers: {
        "Content-type": "application/json",
        "x-api-key": process.env["x-api-key"] || "",
      },
    })
    .then((response) => {
      expect(response.status()).toBe(201);
      response.json().then((data) => {
        expect(data.name).toBe("Zamzam");
        expect(data.job).toBe("QA Engineer");
        expect(data).toHaveProperty("id");
        expect(data).toHaveProperty("createdAt");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

test("PUT Update User", async ({ request }) => {
  await request
    .put(`${baseURL}/api/users/2`, {
      data: {
        name: "Zamzam",
        job: "QA Engineer",
      },
      headers: {
        "Content-type": "application/json",
        "x-api-key": process.env["x-api-key"] || "",
      },
    })
    .then((response) => {
      expect(response.status()).toBe(200);
      response.json().then((data) => {
        expect(data.name).toBe("Zamzam");
        expect(data.job).toBe("QA Engineer");
        expect(data).toHaveProperty("updatedAt");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

test("DELETE User", async ({ request }) => {
  await request
    .delete(`${baseURL}/api/users/2`, {
      headers: {
        "x-api-key": process.env["x-api-key"] || "",
      },
    })
    .then((response) => {
      expect(response.status()).toBe(204);
    });
});
