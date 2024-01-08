import React, {useEffect, useState} from 'react'
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate()
  const [audio] = useState(new Audio("../asset/audio/dashboard/dashboard.mp3"));
  const userKelas = sessionStorage.getItem('JENISKELAS');

  const playAudioDashboard = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const token = sessionStorage.getItem('TOKEN')
    if (!token) {
      navigate('/loginpage')
    } 
  }, [navigate]);

  return (
    <section id='dashboard' className='bg-[#FDFDFD] h-screen'>
        <Navbar/>
        <div className='font-[georgia] max-w-7xl m-auto'>
          <div className='flex-col justify-center text-center items-center'>
            <div className='mt-[6%]'>
              <p className='text-4xl font-bold'>Selamat Datang di MathPed</p>
              <p className='text-lg'>Website pembelajaran Matematika berbasis Agen Pedagogis</p>
            </div>
          </div>

          <div className='flex w-[85%] m-auto mt-[80px] shadow-2xl rounded-md bg-white'>
            <div className='flex w-[40%] justify-end'>
              <img src="../asset/agen/merem.png" alt="" width={230}/>
            </div>

            <div className='bg-[#D9D9D9] w-[40%] m-auto h-[50%] rounded-[10px] mx-auto overflow-hidden'>
              <div className='p-4 text-justify overflow-hidden'>
                Halo teman-teman! Saya Vania yang akan membantu dan menemani kalian selama kalian berada pada web ini! Berikut langkah-langkah pengerjaan :
                <br/> 
                1. Kerjakan soal Pretest terlebih dahulu pada menu Soal <br/>
                2. Setelah itu kalian membaca materi pada menu materi <br/>
                3. Setelah baca materi kalian kerjakan soal Posttest pada menu Soal <br/>
                4. Kalian bisa melihat lagi nilai kalian pada menu
              </div>
            </div>
          </div>

          {userKelas === "kelas-eksperiment" && (
            <div className='w-0 m-auto text-center mt-10' onClick={playAudioDashboard}>
            <button className='btn'>
              {isPlaying ? 'Hentikan' : 'Suara'}
            </button>
          </div>
          )}
        </div>
    </section>
  )
}

export default Dashboard;