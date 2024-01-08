import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Soal = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const location = useLocation()
  const [audio] = useState(new Audio("../asset/audio/soal/soal.mp4"));
  const isBacaSoal = location.pathname === "/soal"
  const userKelas = sessionStorage.getItem('JENISKELAS');

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
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='soal'>
      <Navbar />

      <div className='agenped'>
        <div className='mt-16'>
          <div className='font-[georgia] text-center'>
            <h1 className='text-[40px]'>SOAL</h1>
            <p className='text-[20px]'>Perkalian dan Pembagian Pecahan</p>
          </div>

          <div className='font-[georgia] mt-10'>
            <h1>Pilihlah Soal Berikut</h1>

            <Link to={'/quiz_setup_pretest'}>
              <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                <p className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl cursor-pointer'>Pre-Test</p>
              </div>
            </Link>

            <Link to={"/quiz_setup_posttest"}>
              <div className='flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center'>
                <p className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl cursor-pointer'>Post-Test</p>
              </div>
            </Link>
          </div>
          
        </div>

        {userKelas === "kelas-eksperiment" && (
          <aside className='mt-12'>
            <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
              <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
              <div className='px-4 py-6 text-justify'>
                {isBacaSoal && showMessage ? (
                  <p className='font-[georgia]'>
                    Disini kita akan mengerjakan soal. Silahkan kerjakan Pre-Test terlebih dahulu baru kerjakan Post-Test. Semangat!
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
        )}
        
      </div>
    </section>
  );
};

export default Soal;