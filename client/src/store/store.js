import { createStore } from "redux";

const initialState = {
    id: null, username:null, user_type: null, image_url: null
}


function handleState(state = initialState,action){
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                username: action.username,
                id: action.id,
                user_type: action.user_type,
                image_url: action.image_url
            }
        default:
            return state
    }
}

const store = createStore(handleState)

export default store 