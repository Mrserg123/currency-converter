import { Action, ActionType } from '../actionTypes/index';

// export interface Comment {
//     postId: number,
//     id: number,
//     name: string,
//     email: string,
//     body: string
// }

interface State {
    money: {};
    loading: boolean;
    error: string | null ;
}

const initialState:any = {
    money: [],
    loading: false, 
    error: null
}

const moneyReducer = (state: State = initialState, action: Action):State => {
    switch(action.type) {
        case ActionType.GET_POST_PENDING:
            return {
                loading: true,
                money: [],
                error: null  
            } 
        case ActionType.GET_POST_SUCCESS:
            return {
                loading: false,
                money: action.payload,
                error: null 
            }
        case ActionType.GET_POST_FAIL:
            return {
                loading: false,
                error: action.payload,
                money: []
            }
        default: 
            return state;
    }
}

export default moneyReducer;