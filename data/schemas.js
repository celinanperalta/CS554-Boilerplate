/* eslint-disable no-unused-vars */
const Joi = require('joi');
const {ObjectId} = require('mongodb');

const objectIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);