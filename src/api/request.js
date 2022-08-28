import axios from "axios";
import { BASE_URL, TIME_OUT } from './config'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

export const login = (username, password) => {
    instance.post(`/weiboke/user/login?username=${username}&password=${password}`)
}

export const register = (username, password) => {
    instance.post(`/weiboke/user/register?username=${username}&password=${password}`)
}

export const getUserInfo = (userId) => {
    instance.get(`/weiboke/user?user_id=${userId}`)
}

export const followArticle = (userId) => {
    instance.get(`/weiboke/follow/articlelist?user_id=${userId}`)
}

export const recommendArticle = () => {
    instance.get(`/weiboke/recommend/articlelist`)
}

export const createColumn = (content, introduction, userId) => {
    instance.post(`/weiboke/creation/column?title=${content}&introduction=${introduction}&userId=${userId}`)
}

export const createArticle = (content, title, column, userId) => {
    instance.post(`/weiboke/creation/article?title=${title}&content=${content}&columnId=${column}&userId=${userId}`)
}

export const columnInfo = (columnId) => {
    instance.get(`/weiboke/publish/column?columnId=${columnId}`)
}

export const articleInfo = (articleId) => {
    instance.get(`/weiboke/publish/article?articleId=${articleId}`)
}

export const avatarImage = (file, userId) => {
    instance.post(`/weiboke/static/Image/head?userId=${userId}`)
}

export const columnImage = (title, columnId) => {
    instance.post(`/weiboke/static/Image/cover?columnId=${columnId}`)
}

export const showImage = (filename) => {
    instance.get(`/weiboke/static/Image/${filename}`)
}

export const follow = (userId, authorId, type) => {
    instance.post(`/weiboke/follow?userId=${userId}&authorId=${authorId}&type=${type}`)
}

export const cutInImage = (articleId) => {
    instance.post(`/weiboke/static/Image/article?articleId=${articleId}`)
}
