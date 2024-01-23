import {Schema, model} from "mongoose";
import Joi from "joi"; 

const contactSchema = new Schema({
  name: {
      type: String,
      required: [true, 'Set name for contact'],
  },
  email:  {
      type: String,
  },
  favorite: {
      type: Boolean,
      default: false,
  },
  phone: {
      type: String,
  }
}, {versionKey: false, timestamps: true});

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
    favorite: Joi.boolean()
  });
  
export const contactsUpdateSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    favorite: Joi.boolean(),
  });

export const contactUpdateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})


const Contact = model("contact", contactSchema);


export default Contact;
