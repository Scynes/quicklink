import mongoose from "mongoose";

const ACCOUNT_SCHEMA = mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    APIKey: {
        type: String,
        required: false
    }

}, { timestamps: true });

export default mongoose.model('account', ACCOUNT_SCHEMA);