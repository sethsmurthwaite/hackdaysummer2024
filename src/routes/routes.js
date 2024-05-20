const express = require('express')
const health = require('./health.js')
const homePage = require('./page/home')


routes = {
    "/health": health,
    "/page/home": homePage
}

module.exports = routes
