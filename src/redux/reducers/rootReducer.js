import { combineReducers} from 'redux';

import changeState from './sidebar';
import posts from './posts';

export default combineReducers({
    sidebar: changeState,
    article: posts
    
})