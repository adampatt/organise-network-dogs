import axios from "axios";

export const DogApi = axios.create({
  baseURL: "https://dog.ceo/api/breeds",
  timeout: 1000
});
