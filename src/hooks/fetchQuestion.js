import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import * as Action from "../redux/question_reducer_posttest"
import * as ActionPretest from "../redux/question_reducer_pretest"
import { getServerData,  getServerDataPretest} from "../helper/helper"

// Post - Test
export const useFetchQestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError : null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        (async() => {
            try {
                const [{questions, answers}] = await getServerData(" https://mathped-be.vercel.app/questions", (data) => data)

                if(questions.length > 0) {
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : {questions, answers}}));

                    // dispatch an action
                    dispatch(Action.startExamAction({question : questions, answers}))
                } else {
                    throw new Error("No Question Avalibale")
                }

            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

export const moveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error)
    }
}

export const movePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error)
    }
}

// Pre - Test
export const useFetchQestionPretest = () => {
    const dispatch = useDispatch()
    const [getDataPretest, setGetDataPretest] = useState({ isLoading : false, apiData : [], serverError : null});

    useEffect(() => {
        setGetDataPretest(prev => ({...prev, isLoading : true}));

        (async() => {
            try {
                const [{questionsPretest, answersPretest}] = await getServerDataPretest(" https://mathped-be.vercel.app/questionsPretest", (data) => data)

                if(questionsPretest.length > 0) {
                    setGetDataPretest(prev => ({...prev, isLoading : false}));
                    setGetDataPretest(prev => ({...prev, apiData : {questionsPretest, answersPretest}}));

                    dispatch(ActionPretest.startExamActionPretest({questionPretest : questionsPretest, answersPretest}))
                } else {
                    throw new Error("No Question Avalibale")
                }

            } catch (error) {
                setGetDataPretest(prev => ({...prev, isLoading : false}));
                setGetDataPretest(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataPretest, setGetDataPretest];
}

export const moveNextQuestionPretest = () => async (dispatch) => {
    try {
        dispatch(ActionPretest.moveNextActionPretest())
    } catch (error) {
        console.log(error)
    }
}

export const movePrevQuestionPretest = () => async (dispatch) => {
    try {
        dispatch(ActionPretest.movePrevActionPretest())
    } catch (error) {
        console.log(error)
    }
}