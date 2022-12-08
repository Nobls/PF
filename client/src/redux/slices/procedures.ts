import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";
import {fetchUserPet} from "./userPet";

export interface PetProcedures {
    typeVaccination: string
    dateVaccination: any
    nameOfVaccine: string
    dateProcedure: any
    nameOfProcedure: string
    nameClinic: string
}

type StatePetProceduresType = {
    procedures: PetProcedures[]
    loading: boolean
    errors: any
}

const initialState: StatePetProceduresType = {
    procedures: [],
    loading: false,
    errors: null
}

export const fetchPetProcedures = createAsyncThunk<PetProcedures[]>(
    'procedures/fetchPetProcedures',
    async (id:any) => {
        const {data} = await axios.get(`/petAccount/${id}/procedures`)
        return data
    }
)

const petProceduresSlice = createSlice({
    name: 'petProcedures',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPetProcedures.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPetProcedures.fulfilled, (state, action) => {
            state.procedures = action.payload
            state.loading = false
        })
        builder.addCase(fetchPetProcedures.rejected, (state) => {
            state.loading = true
        })
    }
})

export const petProceduresReducer = petProceduresSlice.reducer