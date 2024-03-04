import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CategoryResponse, QuestionsResponse } from '../../../types/interfaces'

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/' }),
    endpoints: (builder) => ({
        getCategoryOfQuestions: builder.query<CategoryResponse, void>({
            query: () => `api_category.php`,
        }),
        getQuestions: builder.query<QuestionsResponse, string>({
            query: (result) => `${result}`
        })
    }),
})


export const { useGetCategoryOfQuestionsQuery, useGetQuestionsQuery, useLazyGetQuestionsQuery } = quizApi
