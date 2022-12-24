import {configureStore} from '@reduxjs/toolkit'
import { movieApi } from './moviesCore'

export const store = configureStore ({
    reducer:{
[movieApi.reducerPath]:movieApi.reducer,

    },
    middleware:(getDefaultMiddleWare) => getDefaultMiddleWare().concat(movieApi.middleware) 
})