require("dotenv").config();

const { createProxyMiddleware } = require('http-proxy-middleware');

const EXPRESS_HOST = process.env.EXPRESS_HOST || 'localhost';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://${EXPRESS_HOST}:5000`
    })
  );
};