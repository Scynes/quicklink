import mongoose from "mongoose";
import shortid from "shortid";

const LINK_SCHEMA = new mongoose.Schema({

    originalURL: {
        type: String,
        required: true
    },

    shortURL: {
        type: String,
        default: shortid.generate
    },

    visits: {
        type: Number,
        default: 0
    }
});

export default LINK_SCHEMA;