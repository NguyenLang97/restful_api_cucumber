const { When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const chai = require('chai');
const { expect } = chai;
const app = require('../../src/app'); // Đường dẫn đến file app.js

let response;
When('I send a GET request to {string}', async (endpoint) => {
  response = await request(app).get(endpoint);
});

Then('the response status should be {int}', (statusCode) => {
  expect(response.status).to.equal(statusCode);
});

Then('the response body should contain a list of products', () => {
  expect(response.body).to.be.an('array');
  expect(response.body).to.have.length.above(0);
});

When('I send a POST request to {string} with:', async (endpoint, dataTable) => {
  const data = dataTable.rowsHash();
  response = await request(app).post(endpoint).send(data);
});

Then('the response body should contain the new product', () => {
  expect(response.body).to.be.an('object');
  expect(response.body).to.have.property('id');
  expect(response.body).to.have.property('name').that.is.a('string');
  expect(response.body).to.have.property('price').that.is.a('number');
});
