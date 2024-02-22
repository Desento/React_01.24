import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/' }),
    endpoints: (builder) => ({
        getCategoryOfQuestions: builder.query({
            query: () => `api_category.php`,
        }),
        getQuestions: builder.query({
            query: (result) => `${result}`
        })
    }),
})


export const { useGetCategoryOfQuestionsQuery, useGetQuestionsQuery, useLazyGetQuestionsQuery } = quizApi