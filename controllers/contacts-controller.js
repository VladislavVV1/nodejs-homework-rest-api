import Contact from "../models/Contact.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res, next) => {
    const result = await Contact.find();
    
    res.json(result);
}

const getById = async (req, res, next) =>{
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
        throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json(result);
}

const add = async (req, res, next) =>{
    const result = await Contact.create(req.body);

    res.status(201).json(result)
}

const updateById = async (req, res, next) =>{
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body);
    if (!result) {
        throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json(result);
}

const deleteById = async (req, res, next) =>{
    const { id } = req.params;
    const result = await Contact.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json({
        message: "Delete success"
    })
}

const updateStatusContact = async (req, res) => {
    const { id } = req.params;
    if (!req.body) throw HttpError(400, "missing field favorite");
    const result = await Contact.findByIdAndUpdate(id, req.body);
    if (!result) throw HttpError(404, "Not found");
  
    res.status(200).json(result);
  };

export default {
    getListContacts: ctrlWrapper(getAll),
    addContact: ctrlWrapper(add),
    getContactById: ctrlWrapper(getById),
    removeContact: ctrlWrapper(deleteById),
    updateContactById: ctrlWrapper(updateById),
    updateStatusContact:ctrlWrapper(updateStatusContact)
}