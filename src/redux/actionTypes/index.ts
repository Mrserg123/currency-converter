
export enum ActionType {
    GET_POST_PENDING = 'GET_POST_PENDING',
    GET_POST_SUCCESS = 'GET_POST_SUCCESS',
    GET_POST_FAIL = 'GET_POST_FAIL'
}

interface actionPending {
    type: ActionType.GET_POST_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_POST_SUCCESS;
    payload: {};
}

interface actionFail {
    type: ActionType.GET_POST_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail  ;