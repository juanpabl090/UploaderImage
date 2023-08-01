import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"

export const uploadImage = async (formData) => {
  const response = await axios.post(axios.defaults.baseURL + '/api/v1/images', formData)
  return response.status
}