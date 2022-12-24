import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const movieApi = createApi({
    reducerPath:"movieApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://zylalabs.com/api/228/movie+and+series+database+api/235/get+by+search?s=Game of Thrones",
        prepareHeaders:(headers) => {
            headers.set('Authorization', 'Bearer 486|FmCJTgCD3jFbou63CfqidyX0TvLvPTtr7SSkoP39' )
                return headers;
        }
    }),
    endpoints: (builder) => ({
        getAllMovies: builder.query({query: () => ''})

    })

    
})
export const {useGetAllMoviesQuery} =  movieApi