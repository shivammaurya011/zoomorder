const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: Number,
        country: String,
    },
    profilePicture: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    orderHistory: [{
        orderId: {
            type: String,
            unique: true,
        },
        items: [{
            itemId: String,
            name: String,
            quantity: Number,
            price: Number,
        }],
        totalCost: Number,
        date: {
            type: Date,
            default: Date.now,
        },
    }],
    paymentMethods: [{
        type: String,
        enum: ["upi", "debit", "credit", "net"],
    }],
    dietaryPreferences: {
        type: String,
        enum: ["veg", "non-veg"],
        default: "veg",
    },
    favoriteCuisines: [String],
    notificationPreferences: {
        email: {
            type: Boolean,
            default: true,
        },
        sms: {
            type: Boolean,
            default: false,
        },
        push: {
            type: Boolean,
            default: true,
        },
    },
    role: {
        type: String,
        enum: ["customer", "admin", "delivery"],
        default: "customer",
    },
    authToken: String,
}, { 
    timestamps: true,
    versionKey: false,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
