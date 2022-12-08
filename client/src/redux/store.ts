import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./slices/posts";
import {authReducer} from "./slices/auth";
import {servicesReducer} from "./slices/services";
import {userPetReducer} from "./slices/userPet";
import {petProceduresReducer} from "./slices/procedures";

const store = configureStore({
    reducer: {
        news: postsReducer,
        auth: authReducer,
        services: servicesReducer,
        userPet: userPetReducer,
        procedures: petProceduresReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store