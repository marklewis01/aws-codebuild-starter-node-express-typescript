import { expect } from "chai";
import { agent } from "supertest";
import server from "../server";

const request = agent;

describe("Basic GET Request", () => {
  it(`Get request to / returns JSON with message key: "I am on the line!"`, async () => {
    const res = await request(server).get("/");
    const textResponse = res.body;
    expect(res.status).to.equal(200);
    expect(textResponse.message).to.be.a("string");
    expect(textResponse.message).to.equal("I am on the line!");
  });
});

describe("Basic POST Request", () => {
  it(`Post request to / returns JSON with message and data (post data)`, async () => {
    const res = await request(server).post("/");
    const textResponse = res.body;
    expect(res.status).to.equal(200);
    expect(textResponse.message).to.be.a("string");
    expect(textResponse.message).to.equal("Posted successfully");
    expect(textResponse.data).to.be.an("object");
  });
});
