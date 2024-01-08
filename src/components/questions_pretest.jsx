import React, {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'

// costum hook
import { useFetchQestionPretest } from '../hooks/fetchQuestion.js'
import { updateResultPretest } from '../hooks/setResult.js'


const QuestionsPretest = ({onChecked}) => {
    const [checked, setChecked] = useState(undefined)
    const {trace} = useSelector(state => state.questionsPretest)
    const result = useSelector(state => state.resultPretest.resultPretest)
    const [{isLoading, apiData, serverError}] = useFetchQestionPretest()
    
    const questions = useSelector(state => state.questionsPretest.queuePretest[state.questionsPretest.tracePretest])

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(updateResultPretest({trace, checked}))
    }, [checked])

    const onSelect = (i) => {
        onChecked(i)
        setChecked(i)
        dispatch(updateResultPretest({trace, checked}))
    }

    if(isLoading) return <h3 className='font-light'>isLoading</h3>
    if(serverError) return <h3 className='font-light'>{serverError || "Unknown Error"}</h3>


  return (
    <section id='questionsPretest'>
        {/* Pertanyaannya */}
        <h2 className='font-[Georgia] text-xl text-justify'>{questions?.question}</h2>

        {/* Pilihan gandanya */}
        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i} className='bulet'>
                        <input type="radio" 
                        value={false}
                        name='options'
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                        />

                        <label className='max-w-full' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] === i ? 'checked':''}`}></div>
                    </li>
                ))
            }
        </ul>
    </section>
  )
}

export default QuestionsPretest