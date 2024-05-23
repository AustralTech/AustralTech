import axios from "axios";
import {
    CREATE_SPECIALITY,
    GET_SPECIALITIES,
} from "./Actions-type"


//USER
const URLSP = "http://localhost:3000/api/specialities";
 
export const createSpeciality = (userData) => {
    return async function(dispatch) {
        try {
            const { data } = await axios.post(`${URLSP}`, userData);
            dispatch({ type: CREATE_SPECIALITY, payload: data });
        } catch (error) {
            console.error("Error al crear especialidad:", error);
        }
    }
}

export const getSpecialities = () => {
    return async function(dispatch) {
        try {
            const { data } = await axios.get(`${URLSP}`);
            dispatch({ type: GET_SPECIALITIES, payload: data });
        } catch (error) {
            console.error("Error al obtener especialidad:", error);
        }
    }
}
