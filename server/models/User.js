import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        surName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        city: {
            type: String,
        },
        street: {
            type: String,
        },

        houseNumber:{
            type: String,

        },
        corpsHouse: {
            type: String,
        },
        apartmentNumber:{
            type: String,
        },
        userPhoneNumber: {
            type: String
        },
        avatarUrl: String,
    },
    {
        timestamps: true,

    }
);

export default mongoose.model('User', UserSchema)