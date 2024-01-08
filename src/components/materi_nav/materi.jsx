import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar';

const Materi = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const location = useLocation();
  const navigate = useNavigate()
  const isBacaMateri = location.pathname === '/materi';
  const [audio] = useState(new Audio("../asset/audio/materi/materi.mp4"));

  const userKelas = sessionStorage.getItem('JENISKELAS');

  const playAudioMateri = () => {
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
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleBacaMateriClick = (kelas) => {
    if (userKelas === kelas) {
      if (kelas === "kelas-kontrol") {
        navigate('/page_materi')
      } else if (kelas === "kelas-eksperiment") {
        navigate("/page_materi")
      }
    }
  };

  return (
    <section id='materi'>
        <Navbar/>

        <div className='agenped'>
            <div className='mt-16'>

              <div className='font-[georgia] text-center'>
                <h1 className=' text-[40px]'>MATERI</h1>
                <p className='text-[20px]'>Perkalian dan Pembagian Pecahan</p>
              </div>

              <div className='font-[georgia] mt-10'>
                <div>
                  <p>Materi Pembelajaran</p>
                  <div className={`flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center ${userKelas !== "kelas-kontrol" ? "opacity-50" : ""} ${userKelas === "kelas-kontrol" ? " cursor-pointer" : "cursor-not-allowed"}`}
                      onClick={() => handleBacaMateriClick("kelas-kontrol")}
                    >
                      <p className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl'>Baca Materi</p>
                  </div>
                </div>

                <div>
                  <p>Materi Pembelajaran</p>
                  <div className={`flex max-w-full mx-auto bg-[#1D809F] h-16 rounded-[10px] items-center my-4 px-4 justify-center ${userKelas !== "kelas-eksperiment" ? "opacity-50" : ""} ${userKelas === "kelas-eksperiment" ? " cursor-pointer" : "cursor-not-allowed"}`}
                      onClick={() => handleBacaMateriClick("kelas-eksperiment")}
                    >
                      <p className='font-[Georgia] font-medium text-white text-[20px] bg-[#1D809F] p-2 rounded-xl'>Baca Materi</p>
                  </div>
                </div>
              </div>

          </div>

            {userKelas === "kelas-eksperiment" && (
              <aside className='mt-12'>
                <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                  <img src="../asset/agen/guru.png" alt="" width={230} className='mx-auto' />
                    <div className='px-4 py-6 text-justify'>
                      {isBacaMateri && showMessage ? (
                        <p className='font-[georgia]'>
                          Disini kita akan membaca materi tentang perkalian dan pembagian pecahan. Silahkan klik “ Baca Materi “
                        </p>
                      ) : null}
                    </div>
                </div>

                <div className='text-center font-[georgia] mt-4'>
                  <p>Klik tombol dibawah ini untuk memakai suara!</p>
                  <button className='btn mt-4' onClick={playAudioMateri}>
                    {isPlaying ? 'Hentikan' : 'Suara'}
                  </button>
                </div>
              </aside>
            )}

        </div>
    </section>
  )
}

export default Materi;