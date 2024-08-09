const mongoose = require('mongoose');

const connectDB = async (password) => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://swyner97:${password}@cluster0.yv7pl.mongodb.net/?retryWrites=true&w=majority`);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}



module.exports = connectDB;