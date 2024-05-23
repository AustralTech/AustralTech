import { CREATE_SPECIALITY, GET_SPECIALITIES } from "./Actions/Actions-type";

const initialState= {
    specility: [],
    user:[]
};

const rootReducer=(state= initialState, action)=>{
    switch(action.type){
        case CREATE_SPECIALITY: return{
            ...state, specility: action.payload
        }
        case GET_SPECIALITIES: return{
            ...state, specility: action.payload
        }
        default:
            return {...state}
    }
}

export default rootReducer;