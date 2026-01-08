import axios from "axios";


const BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080";

export const DataAPI = {
  async fetchCrew() {
    try {
      const response = await axios.get(`${BASE_URL}/crew`);
      return response.data;
    } catch (error) {
      const status = error.response?.status;
      throw new Error(`Erreur API /crew : ${status || error.message}`);
    }
  },

  async fetchDestinations() {
    try {
      const response = await axios.get(`${BASE_URL}/destinations`);
      return response.data;
    } catch (error) {
      const status = error.response?.status;
      throw new Error(`Erreur API /destinations : ${status || error.message}`);
    }
  },

  async fetchTech() {
    try {
      const response = await axios.get(`${BASE_URL}/technology`);
      return response.data;
    } catch (error) {
      const status = error.response?.status;
      throw new Error(`Erreur API /technology : ${status || error.message}`);
    }
  },
};
