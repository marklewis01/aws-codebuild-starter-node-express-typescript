import { expect } from "chai";
import { agent } from "supertest";
import app from "../app";

const request = agent;

describe("Some controller", () => {
  it(`Get request to / returns JSON with message key: "I am on the line!"`, async () => {
    const res = await request(app).get("/");
    const textResponse = res.body;
    expect(res.status).to.equal(200);
    expect(textResponse.message).to.be.a("string");
    expect(textResponse.message).to.equal("I am on the line!");
  });
});
