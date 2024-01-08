import React, { useState, useEffect } from 'react';
import Questions from '../../Questions';
import { moveNextAction, movePrevAction } from '../../../redux/question_reducer_posttest';
import { PushAnswer } from '../../../hooks/setResult';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Soal_belajar_posttest = () => {
  const [check, setChecked] = useState(undefined);
  const [message, setMessage] = useState('');
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
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
    if (trace < queue.length) {
      dispatch(moveNextAction());

      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  };

  const onKembali = () => {
    if (trace > 0) {
      dispatch(movePrevAction());
    }
  };

  const onChecked = (check) => {
    setChecked(check);
  };

  useEffect(() => {
    updateMessage();

    const intervalId = setInterval(() => {
      updateMessage();
    }, speakInterval);

    return () => clearInterval(intervalId);
  }, []);

  if (result.length && result.length >= queue.length) {
    return <Navigate to={'/result_posttest'} replace={true}></Navigate>;
  }

  return (
    <section id='soal_belajar_posttest'>
      <div className='container'>
        <div className='grid grid-cols-2 gap-10 w-[82%] m-auto mt-[39px]'>
          
          <div>
            <div className='h-[80%]'>
              <Questions onChecked={onChecked} />
            </div>
            <div>
              <div className='grid grid-cols-2 mt-10'>
                  {trace > 0 ? (
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
  );
};

export default Soal_belajar_posttest;
