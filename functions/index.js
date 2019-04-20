
var express = require('express');
var app = require('./app')
var functions = require('firebase-functions')
exports.api = functions.https.onRequest(app);