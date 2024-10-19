import {
    combineReducers,
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux';

import { thunk }from 'redux-thunk';
import authReducer from './auth/reducer';
import categoriesReducer from './categories/reducer';
import notifReducer from './notif/reducer';
import talentsReducer from './talents/reducer';
import paymentsReducer from './payments/reducer';
import eventsReducer from './events/reducer';
import listsReducer from './lists/reducer';
import ordersReducer from './orders/reducer';

const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
        auth: authReducer,
        categories: categoriesReducer,
        notif: notifReducer,
        talents: talentsReducer,
        payments: paymentsReducer,
        events: eventsReducer,
        lists: listsReducer,
        orders: ordersReducer,
    });
const store = createStore(
        rootReducers,
        composerEnhancers(applyMiddleware(thunk))
    );

export default store;