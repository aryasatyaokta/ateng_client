import {combineReducers, configureStore} from '@reduxjs/toolkit'

import questionReducer from './question_reducer_posttest';
import resultReducer from './result_reducer_posttest';

import questionReducerPretest from './question_reducer_pretest';
import resultReducerPretest from './result_reducer_pretest';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer,
    questionsPretest : questionReducerPretest,
    resultPretest : resultReducerPretest,
})

export default configureStore({reducer : rootReducer})