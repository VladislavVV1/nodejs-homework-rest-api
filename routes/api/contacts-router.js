import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import {isEmptyBody, isValidId} from "../../middlewares/index.js";
import {validateBody} from "../../decorators/index.js";
import {contactsAddSchema, contactsUpdateSchema, contactUpdateFavoriteSchema} from "../../models/Contact.js"

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getListContacts);

contactsRouter.get("/:id", isValidId, contactsController.getContactById);

contactsRouter.post("/", isEmptyBody, validateBody(contactsAddSchema), contactsController.addContact);

contactsRouter.put("/:id", isValidId,  isEmptyBody, validateBody(contactsUpdateSchema), contactsController.updateContactById);

contactsRouter.delete("/:id", isValidId, contactsController.removeContact)

contactsRouter.patch("/:id/favorite", isValidId, isEmptyBody, validateBody(contactUpdateFavoriteSchema), contactsController.updateContactById);

export default contactsRouter;