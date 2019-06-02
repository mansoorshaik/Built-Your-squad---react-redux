import {RECEIVE_MEMES} from '../actions/index';
import {NEW_MEME} from '../actions/index';

//import {rootReducers} from ' redux';
import { combineReducers } from 'redux';

function memes(state=[], action){
    switch(action.type){
        case RECEIVE_MEMES:
            return action.memes

        default:
            return state;
    }
}
function myMeme(state=[], action){
switch(action.type){
    case NEW_MEME:
        state=[...state, action.meme];
        return state;
        default:
            return state;
}
}
const rootReducers =combineReducers({memes,myMeme});

export default rootReducers;