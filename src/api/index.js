/**
 * Created by Kibet on 16-Jun-17.
 */
import axios from 'axios'
import {BASE_API_URL} from '../config/index'

export const getCategoriesMenu = params => {
  return axios.get(BASE_API_URL + '/categories/menu', {})
}

export const getChildCategories = params => {
  return axios.get(BASE_API_URL + `/categories/${params.id}/children`)
}
export const getTopProducts = params => {
  return axios.get(BASE_API_URL + '/products/top', {})
}
export const getProductDetails = params => {
  return axios.get(BASE_API_URL + `/products/${params.id}`, {})
}

export const getRecommendations = params => {
  return axios.get(BASE_API_URL + '/products/recommendations', {})
}

export const getCategoryProducts = params => {
  return axios.get(BASE_API_URL + `/categories/${params.id}/products`, {})
}

export const getCategoryOptions = params => {
  return axios.get(BASE_API_URL + `/categories/${params.id}/options`, {})
}

export const search = params => {
  return axios.post(BASE_API_URL + '/search', {})
}

export const checkout = params => {
  return axios.post(BASE_API_URL + '/checkout', params)
}
