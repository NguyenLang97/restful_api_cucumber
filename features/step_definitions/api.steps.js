const { Given, When, Then, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const chai = require('chai');
const expect = chai.expect;
const axios = require('axios');
const app = require('../../src/server');
const http = require('http');

let server;
let apiUrl;
let response;
let port = 8082;
// Khởi động server trước khi chạy kiểm thử
BeforeAll((done) => {
  server = http.createServer(app);
  server.listen(8082, () => {
    console.log(`Test server is running on http://localhost:${8082}`);
    done();
  });
});

// Dừng server sau khi kiểm thử
AfterAll((done) => {
  server.close(() => {
    console.log('Test server stopped.');
    done();
  });
});

Given('the API endpoint is {string}', (endpoint) => {
  apiUrl = `http://localhost:${8082}${endpoint}`;
});

When('I send a GET request', async () => {
  try {
    response = await axios.get(apiUrl);
  } catch (err) {
    response = err.response;
  }
});

Then('the response status code should be {int}', (statusCode) => {
  console.log('🚀  response ==', response);
  expect(response.status).to.equal(statusCode);
});

// Then('the response should contain {string}', (content) => {
//   expect(JSON.stringify(response.data)).to.include(content);
// });
