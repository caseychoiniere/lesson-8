import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';
import userReducer from './user/user-reducer';
import loadingReducer from './loading/loading-reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
	user: userReducer,
	loading: loadingReducer,
});

export default persistReducer(
	persistConfig,
	rootReducer,
);
