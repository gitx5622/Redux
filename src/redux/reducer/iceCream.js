import { BUY_ICECREAM }from '../action/actionTypes';

const initialState = {
    numOfIcecream : 40
}

const iceCreamReducer  = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIcecream : state.numOfIcecream - 1
        }
        default: return state
    }
}
 export default iceCreamReducer;