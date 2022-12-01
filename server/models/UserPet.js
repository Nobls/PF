import mongoose from "mongoose";

const UserPetSchema = new mongoose.Schema(
    {
        petName: {
            type: String,
            required: true,
        },
        petBreed: {
            type: String,
            required: true,
        },
        agePet: {
            type: String,
            required: true,
        },
        petGender: {
            type: String,
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        petAvatarUrl: String,

        petPersonalCard: String,

    },
    {
        timestamps: true,
    }
)

export default mongoose.model('UserPet', UserPetSchema)