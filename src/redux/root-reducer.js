import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import eventsReducer from './events/events.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['events'],
    stateReconciler: autoMergeLevel2
  }

const rootReducer = combineReducers({
    user: userReducer,
    events:eventsReducer
})

// export default persistReducer(persistConfig,rootReducer)
export default rootReducer