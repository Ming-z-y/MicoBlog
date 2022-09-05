import axios from "axios";
import { BASE_URL, TIME_OUT } from './config'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})


export const login = (username, password) => {
    return instance.post(`/weiboke/user/login?username=${username}&password=${password}`)
}

export const register = (username, password) => {
    return instance.post(`/weiboke/user/register?username=${username}&password=${password}`)
}

export const getUserInfo = (userId) => {
    return instance.get(`/weiboke/user?userId=${userId}`)
}

export const followArticle = (userId) => {
    return instance.get(`/weiboke/follow/articlelist?user_id=${userId}`)
}

export const recommendArticle = () => {
    return instance.get(`/weiboke/recommend/articlelist`)
}

export const createColumn = (content, introduction, userId) => {
    return instance.post(`/weiboke/creation/column?title=${content}&introduction=${introduction}&userId=${userId}`)
}

export const createArticle = (content, title, column, userId) => {
    return instance.post(`/weiboke/creation/article?title=${title}&content=${content}&columnId=${column}&userId=${userId}`)
}

export const columnInfo = (columnId) => {
    return instance.get(`/weiboke/publish/column?columnId=${columnId}&userId=10`)
}

export const articleInfo = (articleId) => {
    return instance.get(`/weiboke/publish/article?articleId=${articleId}`)
}

export const avatarImage = (file, userId) => {
    return instance.post(`/weiboke/static/Image/head?userId=${userId}`)
}

export const columnImage = (title, columnId) => {
    return instance.post(`/weiboke/static/Image/cover?columnId=${columnId}`)
}

export const showImage = (filename) => {
    return instance.get(`/weiboke/static/Image/${filename}`)
}

export const follow = (userId, authorId, type) => {
    return instance.post(`/weiboke/follow?userId=${userId}&authorId=${authorId}&type=${type}`)
}

export const cutInImage = () => {
    return instance.post(`/weiboke/static/Image/article`)
}
