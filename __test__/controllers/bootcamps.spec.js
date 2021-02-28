const app = require("../app");
const request = require("supertest");

describe("GET /api/v1/bootcamps", () => {
  test('responds with 200 status code and message "Show all bootcamps"', async (done) => {
    const { statusCode, body } = await request(app).get("/api/v1/bootcamps");
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Show all bootcamps");
    done();
  });
});

describe("POST /api/v1/bootcamps", () => {
  test('responds with 201 status code and message "Create new bootcamp"', async (done) => {
    const { statusCode, body } = await request(app).post("/api/v1/bootcamps");
    expect(statusCode).toBe(201);
    expect(body.message).toBe("Create new bootcamp");
    done();
  });
});

describe("GET /api/v1/bootcamps/123123", () => {
  test('responds with 200 status code and message "Show bootcamp with id 123123"', async (done) => {
    const { statusCode, body } = await request(app).get(
      "/api/v1/bootcamps/123123"
    );
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Show bootcamp with id 123123");
    done();
  });
});

describe("PUT /api/v1/bootcamps/123123", () => {
  test('responds with 200 status code and message "Update bootcamp with id 123123"', async (done) => {
    const { statusCode, body } = await request(app).put(
      "/api/v1/bootcamps/123123"
    );
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Update bootcamp with id 123123");
    done();
  });
});

describe("DELETE /api/v1/bootcamps/123123", () => {
  test("responds with 204 status code", async (done) => {
    const { statusCode, body } = await request(app).delete(
      "/api/v1/bootcamps/123123"
    );
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Delete bootcamp with id 123123");
    done();
  });
});
