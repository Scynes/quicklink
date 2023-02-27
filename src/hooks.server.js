import mongoose from "mongoose";
import { PRIVATE_MONGODB_URI } from '$env/static/private';

const connectDB = async () => {

    // Deprecation suppression
    mongoose.set('strictQuery', false);

    // Attempt to connect to the database
    mongoose.connect(PRIVATE_MONGODB_URI);

    // On successful connection to the database
    mongoose.connection.on('connected', () => {
        console.log('MongoDB - successfully connected.');
    });
}

connectDB();