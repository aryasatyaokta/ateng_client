import React, {useState, useEffect} from 'react'
import QuestionsPretest from '../../questions_pretest';

import { moveNextActionPretest, movePrevActionPretest } from '../../../redux/question_reducer_pretest';
import { PushAnswerPretest} from '../../../hooks/setResult'

import {useSelector, useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom';

const Soal_belajar_pretest = () => {

  const [check, setChecked] = useState(undefined)
  const [message, setMessage] = useState('');
  const resultPretest = useSelector(state => state.resultPretest.resultPretest)
  const { queuePretest, tracePretest } = useSelector(state => state.questionsPretest)
  const dispatch = useDispatch()
  const userKelas = sessionStorage.getItem('JENISKELAS');

  const suaraAgenPedagogis = [
    "Ayo semangat! aku yakin kamu pasti bisa!",
    "Jangan menyerah ya!",
    "Ayo ingat-ingat lagi apa yang sudah kamu pelajari!",
    "Semangat ya!",
    "Tetap percaya pada dirimu sendiri. Kamu bisa melampaui batasan yang ada!",
    "Ayo, aku yakin kamu pasti bisa!"
  ];

  const speakInterval = 40000;
  const displayDuration = 6000;

  const updateMessage = () => {
    const randomIndex = Math.floor(Math.random() * suaraAgenPedagogis.length);
    const randomMessage = suaraAgenPedagogis[randomIndex];
    setMessage(randomMessage);

    setTimeout(() => {
      setMessage('');
    }, displayDuration);
  };

  const onSelanjutnya = () => {
    if(tracePretest < queuePretest.length) {
      dispatch(moveNextActionPretest())

      if(resultPretest.length <= tracePretest) {
        dispatch(PushAnswerPretest(check))
      }
    }
    setChecked(undefined)
  }

  const onKembali = () => {
    if(tracePretest > 0) {
      dispatch(movePrevActionPretest())
    }
  }

  const onChecked = (check) => {
    setChecked(check)
  }

  useEffect(() => {
    updateMessage();

    const intervalId = setInterval(() => {
      updateMessage();
    }, speakInterval);

    return () => clearInterval(intervalId);
  }, []);

  if(resultPretest.length && resultPretest.length >= queuePretest.length) {
    return <Navigate to={'/result_pretest'} replace={true}></Navigate>
  }

  return (
    <section id='soal_belajar_pretest'>
        <div className='container'>
          <div className='grid grid-cols-2 gap-10 w-[82%] m-auto mt-[39px]'>
      
          <div>
            <div className='h-[80%]'>
              <QuestionsPretest onChecked={onChecked} />
            </div>
            <div>
              <div className='grid grid-cols-2 mt-10'>
                  {tracePretest > 0 ? (
                    <button
                      onClick={onKembali}
                      className='rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-black text-white'>
                      Kembali
                    </button>
                  ) : (
                    <div></div>
                  )}

                  <button
                    onClick={onSelanjutnya}
                    className='rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]'>
                    Selanjutnya
                  </button>
                </div>
            </div>
          </div>

          {userKelas === 'kelas-eksperiment' && (
            <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
              <img src='../asset/agen/guru.png' alt='' width={230} className='mx-auto' />
              <p>
                {message && (
                  <div className='px-4 py-6 text-justify'>
                    {message}
                  </div>
                )}
              </p>
            </div>
          )}

          </div> 
        </div> 
        
    </section>
  )
}

export default Soal_belajar_pretest
