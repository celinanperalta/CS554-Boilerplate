/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();
const data = require("../data");
const model = data.model;

router.get('/', async (req, res) => {
    return res.render('home', {pageTitle:"Hello World!"});
});

module.exports = router;