import { API_URL } from "../config/config";
import axios from "axios";
import { AuthenticationError } from "../error/AuthenticationError";

export const getQueryWithCredential = async (path: string) => {
    const data = await axios.get(`${API_URL}${path}`)
    .then(res => {
        if(res.status === 401) throw new AuthenticationError(res.data, 401)
        return res.data
    }).catch(err => {
        if(err instanceof AuthenticationError){
            return err.getErrorMessage()
        }
    })
    return data;
}

export const getQueryNoCredential = async (path: string) => {
    const data = await axios.get(`${API_URL}${path}`)
    .then(res => res.data)
    .catch(err => {
        console.error(err);
    })
    return data;
}