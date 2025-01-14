import Joi from "joi"; 
export const contactsAddSchema = Joi.object({
    name: Joi.string()
      .required()
      .messages({ "any.required": "missing required name field" }),
    email: Joi.string()
      .required()
      .messages({ "any.required": "missing required email field" }),
    phone: Joi.string()
      .required()
      .messages({ "any.required": "missing required phone field" }),
  });
  
  export const contactsUpdateSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
  });