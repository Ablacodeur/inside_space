import axios from "axios";

const BASE_URL = "http://localhost:3200";

export class DataAPI{

    static async fetchDestination(){
       return (await axios.get(`${BASE_URL}/destinations`)).data
    }
    static async fetchCrew(){
        return (await axios.get(`${BASE_URL}/crew`)).data
    }
     static async fetchTech(){
        return (await axios.get(`${BASE_URL}/technology`)).data
     }
}