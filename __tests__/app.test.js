const seed = require("../db/seed");
const db = require("../db/connection");
const app = require("../app");
const request = require("supertest");

beforeEach(() => {
  return seed();
});

afterAll(() => {
  return db.end();
});

describe("GET /", () => {
  test("should respond with a 200 status code", () => {
    return request(app)
      .get("/api/healthcheck")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ api: "ok" });
      });
  });
});

describe("GET /api/parks", () => {
  test("should respond with a 200 status code", () => {
    return request(app)
      .get("/api/parks")
      .expect(200)
      .then((response) => {
        expect(response.body.parks).toHaveLength(4);
        expect(response.body.parks[0]).toEqual({
          park_id: 1,
          annual_attendance: 1700000,
          park_name: "Thorpe Park",
          year_opened: 1979,
        });
        response.body.parks.forEach((park) => {
          expect(Object.keys(park)).toEqual([
            "park_id",
            "park_name",
            "year_opened",
            "annual_attendance",
          ]);
        });
      });
  });
});
