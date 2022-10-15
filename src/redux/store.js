import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootSaga from './saga';
import jobReducer from '~/redux/reducers/jobSlice';

// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

// redux persist
const rootPersistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['allData', 'itData'],
};

const persistedReducer = persistReducer(rootPersistConfig, jobReducer);

export const store = configureStore({
    reducer: {
        jobs: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ thunk: false, serializableCheck: false }).prepend(sagaMiddleware);
    },
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
