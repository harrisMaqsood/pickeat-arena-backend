const Joi = require('joi');

// vendor validation schema
const vendorSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  status: Joi.string().valid('active', 'inactive').default('inactive'),
});

// menu item schema
const menuItemSchema = Joi.object({
  category: Joi.string().min(3).max(30).required(),
  title: Joi.string().min(3).max(50).required(),
  price: Joi.number().min(0).precision(2).required(),
  isAvailable: Joi.boolean().default(true),
});

// arena schema
const arenaSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  date: Joi.date().iso().greater('now').required(),
  pickupSlots: Joi.array().items(
    Joi.object({
      name: Joi.string().min(3).max(50).required(),
      capacity: Joi.number().integer().min(1).required(),
    }),
  ).min(1).required(),
});

// assignment schema
const assignmentSchema = Joi.object({
  arenaId: Joi.string().hex().length(24).required(),
  vendorId: Joi.string().hex().length(24).required(),
  pickupSlotId: Joi.string().hex().length(24).required(),
});

// get vandor Schema
const getVendorSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100)
    .default(10),
});

module.exports = {
  vendorSchema,
  menuItemSchema,
  arenaSchema,
  assignmentSchema,
  getVendorSchema,
};
