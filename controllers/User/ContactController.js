import { successResponse } from "../../helpers/ResponseBuilder.js";
import Contact from "../../models/Contact.js";

export const createQuery = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newQuery = new Contact({ name, email, subject, message });
        newQuery.save();
        return res.status(200).json(successResponse(null, "Contact form submit successfully. our team will reach you soon."));

    } catch (err) {
        console.error(err);
        return res.status(500).json(errorResponse("OOPS! something went wrong"));
    }
}