const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server");

const testingCar = {
  plate: "NEJ-1759",
  chassis: "6f4 dN8UAY 4P af9230",
  renavam: "04280318378",
  model: "Phantom 6.7 V12 Aut.",
  brand: "Rolls-Royce",
  year: 2013,
};

const testingId = 8;

const { plate, chassis, renavam, model, brand, year } = testingCar;

chai.should();
chai.use(chaiHttp);

describe("Cars API", () => {
  //POST route
  describe("POST /cars", () => {
    it("should POST a new car", (done) => {
      chai
        .request(server)
        .post("/cars")
        .send(testingCar)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("plate").eq(plate);
          response.body.should.have.property("chassis").eq(chassis);
          response.body.should.have.property("renavam").eq(renavam);
          response.body.should.have.property("model").eq(model);
          response.body.should.have.property("brand").eq(brand);
          response.body.should.have.property("year").eq(year);
          done();
        });
    });
  });

  //GET route
  describe("GET /cars", () => {
    it("should GET all cars", (done) => {
      chai
        .request(server)
        .get("/cars")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          done();
        });
    });
  });

  // PUT route
  describe("PUT /cars/:id", () => {
    it("should UPDATE one car", (done) => {
      chai
        .request(server)
        .put(`/cars/${testingId}`)
        .send(testingCar)
        .end((err, response) => {
          response.should.have.status(201);
          response.text.should.be.eq("Car updated");
          done();
        });
    });
  });

  // DELETE route
  describe("DELETE /cars/:id", () => {
    it("should DELETE one car", (done) => {
      chai
        .request(server)
        .delete(`/cars/${testingId}`)
        .end((err, response) => {
          response.should.have.status(200);
          response.text.should.be.eq("Car deleted");
          done();
        });
    });
  });

  // GET ONE route
  describe("GET /cars/:id", () => {
    it("should GET one car", (done) => {
      chai
        .request(server)
        .get(`/cars/${18}`)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id");
          response.body.should.have.property("plate").eq(plate);
          response.body.should.have.property("chassis").eq(chassis);
          response.body.should.have.property("renavam").eq(renavam);
          response.body.should.have.property("model").eq(model);
          response.body.should.have.property("brand").eq(brand);
          response.body.should.have.property("year").eq(year);
          done();
        });
    });
  });
});
