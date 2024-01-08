import React, {useState, useEffect} from 'react'
import Navbar from '../../navbar';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUserIdPretest } from '../../../redux/result_reducer_pretest';
import { useLocation } from 'react-router-dom';

const Quiz_setup_pretest = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showMessage, setShowMessage] = useState(true);

    const inputRef = useRef()
    const dispatch = useDispatch()
    const location = useLocation()
    const [audio] = useState(new Audio("../asset/audio/soal/intruksi_prepos.mp4"));
    const isBacaSoal = location.pathname === "/quiz_setup_pretest"
    
    const startQuiz = () => {
        if(inputRef.current?.value) {
            dispatch(setUserIdPretest(inputRef.current?.value))
        }
    }

    const playAudioSoal = () => {
        if (isPlaying) {
          audio.pause();
          audio.currentTime = 0;
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
      };

    useEffect(() => {
        const nama = sessionStorage.getItem('NAMA'); 
        if (nama) {
          inputRef.current.value = nama;
        }

        const timer = setTimeout(() => {
            setShowMessage(false);
          }, 6000);
      
          return () => clearTimeout(timer);
      }, []);

  return (
    <section id='quiz_setup_pretest'>
        <Navbar/>

        <div className='agenped'>
            <div className='mt-16 text-center font-[Georgia]'>
                <h1 className='text-[40px] mb-[5%]'>INTRUKSI QUIZ PRE-TEST</h1>

                <ol className='mb-[5%] list-decimal pl-4 text-justify'>
                    <li>Quiz ini mempunyai 20 soal yang harus kalian jawab</li>
                    <li>Setiap pertanyaan memiliki beberapa opsi. Kalian hanya bisa memilih 1 jawaban</li>
                    <li>Kalian bisa mengganti jawaban ketika belum menyelesaikan quiz</li>
                    <li>Hasil akan keluar saat sudah menyelesaikan Quiz</li>
                </ol>

                <form id='form text-center'>
                    <input ref={inputRef} type="text" placeholder='Masukan Username'className='mb-[5%] p-2 border border-gray-300 rounded w-[50%] text-center'/>
                </form>

                <div className='text-center'>
                    <Link className='btn' to={'/soal_belajar_pretest'} onClick={startQuiz}>Start Quiz</Link>
                </div>
            </div>

            <aside className='mt-12'>
                <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                    <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
                    <div className='px-4 py-6 text-justify'>
                    {isBacaSoal && showMessage ? (
                        <p className='font-[georgia]'>
                        Disini kita akan mengerjakan quiz. Semangat mengerjakan ya!!!
                        </p>
                    ) : null}
                    </div>
                </div>

                <div className='text-center font-[georgia] mt-4'>
                    <p>Klik tombol dibawah ini untuk memakai suara!</p>
                    <button className='btn mt-4' onClick={playAudioSoal}>
                    {isPlaying ? 'Hentikan' : 'Suara'}
                    </button>
                </div>
            </aside>
        </div>
    </section>
  )
}

export default Quiz_setup_pretest;
