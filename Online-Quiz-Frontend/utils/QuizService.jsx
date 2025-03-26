import axios from 'axios';	

export const api = axios.create({
    baseURL: 'http://localhost:8080/api/quizzes',
})

export const createQuestion = async(quizQuestion) => {
    try {
        console.log("quizQuestion", quizQuestion)
        const response = await api.post(`/create-new-question`,quizQuestion)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const GetAllQuestions = async () => {
    try {
        console.log("Run")
        const response = await api.get(`/all-question`)
        console.log("REs", response)
        return response.data
    } catch (error) {
        console.log(error)
        return[]
    }
}

export const fetchQuizForUser = async (number, question)=>{
    try {
        const response = await api.get(`/quiz/fetch-questions-for-user?numOfQuestions=${number}&subject=${question}`)
        return response.data
    } catch (error) {
        console.log(error)
        return[]
    }
}

export const getSubjects = async () => {
    try {
        const response = await api.get(`/subjects`)
        return response.data
    } catch (error) {
        console.log(error)
        return[]
    }
}

export const updateQuestion = async(id , updatQuestion) => {
    try {
        const response = await api.put(`/question/${id}/update`, updatQuestion)
        return response.data
    } catch (error) {
        console.log(error)
        return[]
    }
}

export const getQuestionById = async (id) => {
    try {
        const response = await api.get(`/question/${ id }`)
        return response.data
    } catch (error) {
        console.log(error)
        return[]
    }
}

export const deleteQuestion = async (id) => {
    try {
        const response = await api.delete(`question/${ id }/delete`)
        return response.data
    } catch (error) {
        console.log(error)
        return[]
    }
}