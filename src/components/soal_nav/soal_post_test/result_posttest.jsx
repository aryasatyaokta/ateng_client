/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../../../helper/helper';
import { useLocation } from 'react-router-dom';

// import action
import { resetAllAction } from '../../../redux/question_reducer_posttest';
import { resetResultAction } from '../../../redux/result_reducer_posttest';
import { PublishResultPosttest, usePublishResult } from '../../../hooks/setResult';
import Navbar from '../../navbar';

const Result_posttest = () => {
    {/** REFLEKSI */}
    const [ refleksiSalah, setRefleksiSalah ] = useState('');
    const [ refleksiBenar, setRefleksiBenar ] = useState('');
    const [ publish, setPublish ] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false);
    const [showMessage, setShowMessage] = useState(true);

    const location = useLocation()
    const isResultPosttest = location.pathname === '/result_posttest';
    const [audio] = useState(new Audio("../asset/audio/materi/materi.mp4"));

    const userKelas = sessionStorage.getItem('JENISKELAS');

    const playAudioResult = () => {
        if (isPlaying) {
          audio.pause();
          audio.currentTime = 0;
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    
    useEffect(() => {
        refleksi(result, answers)
        if(refleksiBenar !== '' && refleksiSalah !== ''){
            PublishPost()
        }
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, [refleksiBenar, refleksiSalah]);

    const dispatch = useDispatch();
    const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

    const totalPoints = queue.length * 5;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 5);
    const flag = flagResult(totalPoints, earnPoints);

    const PublishPost = () => {
        if (publish === false) {
            // store user result
            PublishResultPosttest({
                result,
                username: userId,
                attempts,
                points: earnPoints,
                achived: flag ? "Passed" : "Failed",
                refleksiSalah: refleksiSalah,
                refleksiBenar: refleksiBenar,
            });
        }
    }

    const onRestart = () => {
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    };

    const refleksi = (result, answers) => {
        let perkalianMudah = 0;
        let perkalianSedang = 0;
        let perkalianSulit = 0;
        let pembagianMudah = 0;
        let pembagianSedang = 0;
        let pembagianSulit = 0;
    
        for(let i = 0; i < result.length; i++){
            if(result[i] !== answers[i]){
                if(i < 4){
                    perkalianMudah = perkalianMudah + 1;
                }
                if(i <= 6 && i >= 4){
                    perkalianSedang = perkalianSedang + 1;
                }
                if(i <= 9 && i >= 7){
                    perkalianSulit = perkalianSulit + 1;
                }
                if(i <= 13 && i >= 10){
                    pembagianMudah = pembagianMudah + 1;
                }
                if(i <= 16 && i >= 14){
                    pembagianSedang = pembagianSedang + 1;
                }
                if(i <= 20 && i >= 17){
                    pembagianSulit = pembagianSulit + 1;
                }
            }
        }
        
        let temp_array = [
            {'category': 'Perkalian Mudah', 'value': perkalianMudah}, 
            {'category': 'Perkalian Sedang', 'value': perkalianSedang}, 
            {'category': 'Perkalian Sulit', 'value': perkalianSulit}, 
            {'category': 'Pembagian Mudah', 'value': pembagianMudah}, 
            {'category': 'Pembagian Sedang', 'value':pembagianSedang}, 
            {'category': 'Pembagian Sulit', 'value': pembagianSulit}];
        
        let dictionary = [
            'Materi perkalian biasa dengan biasa',
            'Materi perkalian biasa dengan campuran',
            'Materi perkalian campuran dengan campuran',
            'Materi pembagian biasa dengan biasa',
            'Materi pembagian biasa dengan campuran',
            'Materi pembagian campuran dengan campuran',
        ]

        let array_salah = [];
        let array_benar = [];
        for(let i = 0; i < temp_array.length; i++){
            if(temp_array[i].value >= 2){
                array_salah.push(dictionary[i])
            } else if (temp_array[i].value < 2){
                array_benar.push(dictionary[i])
            }
        }

        let refleksi_benar = ''
        let refleksi_salah = ''
        
        if ( array_benar.length === 1 ) {
            refleksi_benar = array_benar[0]
        } else {
            // Menggabungkan elemen array dengan kata 'dan' di antara indeks terakhir dan sebelum indeks terakhir
            refleksi_benar = array_benar.slice(0, -1).join(', ') + ' dan ' + array_benar.slice(-1);
        }

        if ( array_salah.length === 1 ) {
            refleksi_salah = array_salah[0]
        } else {
            // Menggabungkan elemen array dengan kata 'dan' di antara indeks terakhir dan sebelum indeks terakhir
            refleksi_salah = array_salah.slice(0, -1).join(', ') + ' dan ' + array_salah.slice(-1);
        }

        setRefleksiBenar(refleksi_benar)
        setRefleksiSalah(refleksi_salah)
    }
    
  return (
    <section  id='hasil'>
        <Navbar/>
        <div className='agenped'>
            <div>
                <h1 className='font-bold text-center mb-4'>HASIL BELAJAR</h1>

                <div className='flex justify-center flex-col border w-1/2 m-auto p-8 mb-4'>
                    <div className='flex justify-between'>
                        <span className='font-[16px]'>Nama</span>
                        <span className='font-bold'>{sessionStorage.getItem("NAMA")}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Kuis Poin : </span>
                        <span className='font-bold'>{totalPoints || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Pertanyaan : </span>
                        <span className='font-bold'>{queue.length || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Menjawab : </span>
                        <span className='font-bold'>{attempts || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Total Points : </span>
                        <span className='font-bold'>{earnPoints || 0}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span>Hasil Kuis</span>
                        <span style={{color : `${flag ? "#00b058" : "#ff2a66"}`}} className='font-bold'>{flag ? "Passed" : "Failed"}</span>
                    </div>

                </div>

                <h1 className='font-bold text-center mb-4'>REFLEKSI</h1>
                <div className='flex justify-center flex-col border w-3/4 m-auto p-8 mb-4 text-justify'>
                    Anda telah memahami {refleksiBenar} dengan sangat baik. <br/>Namun, perlu belajar lagi mengenai {refleksiSalah}
                </div>

                <div className='text-center'>
                    <Link className='btn font-[georgia]' to={"/quiz_setup_posttest"} onClick={onRestart}>DONE</Link>
                </div>    
            </div>

            {userKelas === 'kelas-eksperiment' && (
                <aside className='mt-12'>
                <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                    <img src={flag ? "../asset/agen/seneng.png" : "../asset/agen/sedih.png"} alt="" width={230} className='mx-auto' />
                    <div className='px-4 py-6 text-justify'>
                        {isResultPosttest && showMessage && (
                            flag ? (
                                <p className='font-[georgia]'>
                                    Wow kamu hebat! Kamu sudah lulus quiznya!
                                </p>
                            ) : (
                                <p className='font-[georgia]'>
                                    Jangan sedih ya dan tetap semangat belajar!
                                </p>
                            )
                        )}
                    </div>
                </div>

                <div className='text-center font-[georgia] mt-4'>
                    <p>Klik tombol dibawah ini untuk memakai suara!</p>
                    <button className='btn mt-4' onClick={playAudioResult}>
                    {isPlaying ? 'Hentikan' : 'Suara'}
                    </button>
                </div>
            </aside>
            )}
        </div>
    </section>
  )
}

export default Result_posttest;
