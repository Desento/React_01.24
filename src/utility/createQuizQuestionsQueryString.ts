import { ConfigurationState } from "../types/interfaces"

export const createQuizQuestionsQueryString = (state: ConfigurationState) => {
    let queryString = 'api.php?'

    if (state.amount) queryString += `amount=${state.amount}&`
    if (state.category) queryString += `category=${state.category}&`
    if (state.difficulty) queryString += `difficulty=${state.difficulty}&`
    if (state.type) queryString += `type=${state.type}&`
    if (queryString.endsWith('&')) {
      queryString = queryString.slice(0, -1)
    }

    return queryString
}