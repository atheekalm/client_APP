import { RootState } from './../test_redux/configureStore';
import { Service } from './../../app/models/Service';
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import client_agent from '../../app/api/client_agent';


const serviceAdapter = createEntityAdapter<Service>();

export const fetchServicesAsync = createAsyncThunk<Service[]>(
    'services/fetch',
    async (_, thunkAPI) => {
        try {
            return client_agent.Appservice.services();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)
export const fetchServiceAsync = createAsyncThunk<Service, number>(
    'service/fetch',
    async (Serviceid, thunkAPI) => {
        try {
            return client_agent.Appservice.service(Serviceid);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const serviceSlice = createSlice({
    name: 'Services',
    initialState: serviceAdapter.getInitialState({
        servicesLoaded: false,
        status: 'idle'
    }),
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchServicesAsync.pending, (state) => {
            state.status = 'pendingFetchServices'
        });
        builder.addCase(fetchServicesAsync.fulfilled, (state, action) => {
            serviceAdapter.setAll(state, action.payload);
            state.status = 'idle';
            state.servicesLoaded = true
        });
        builder.addCase(fetchServicesAsync.rejected, (state) => {
            state.status = 'idle'
        });
        builder.addCase(fetchServiceAsync.pending, (state) => {
            state.status = 'pendingFetchService'
        });
        builder.addCase(fetchServiceAsync.fulfilled, (state, action) => {
            serviceAdapter.upsertOne(state, action.payload);
            state.status = 'idle'
        });
        builder.addCase(fetchServiceAsync.rejected, (state,action) => {
            state.status = 'idle'
            console.log(action.payload)
        });
    })
})


export const serviceSelectors = serviceAdapter.getSelectors((state: RootState) => state.services)