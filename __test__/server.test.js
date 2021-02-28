const app = require("../app");
const request = require("supertest");

describe("GET /", () => {
  test('responds with message "Server Running"', async (done) => {
    const { body } = await request(app).get("/");
    expect(body.message).toBe("Server Running");
    done();
  });
});
