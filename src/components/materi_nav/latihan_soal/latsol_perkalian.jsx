import React, { useState } from 'react';
import Navbar from '../../navbar';
import { useNavigate } from 'react-router-dom';

const LatsolPerkalian = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [wrongAnswer, setWrongAnswer] = useState(null);
    const [hintCount, setHintCount] = useState(0);
    const [showHintButton, setShowHintButton] = useState(false);
    const [message, setMessage] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [showHint, setShowHint] = useState(false);
    const [stepsHint, setstepsHint] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentHintIndex, setCurrentHintIndex] = useState(0);
    const [buttonSuara, setButtonSuara] = useState(false);
    const [imagePath, setImagePath] = useState("../asset/agen/guru.png");

    const userKelas = sessionStorage.getItem('JENISKELAS');

    const maxWrongAttemptsBeforeHint = 1;
    const navigate = useNavigate();

    const questionsPerkalian = [
        {
            question: "1. Jika setiap hari kita minum 5/6 liter susu, maka berapa liter susu yang diminum selama 3 hari?",
            options: [
                {
                    id: 'A',
                    text: "8/6 liter",
                },
                {
                    id: 'B',
                    text: "5/2 liter",
                },
                {
                    id: 'C',
                    text: "2/6 liter",
                },
                {
                    id: 'D',
                    text: "3/6 liter",
                },
            ],
            correctAnswer: 'B',
            stepsHint : [
                {
                    judul : "Langkah 1",
                    text : `Setiap hari kita meminum 5/6 susu. Berapa liter jika diminum selama 3 hari?
                    5/6 dikali dengan 3 = ... ?
                    `,
                    suara: "../asset/audio/materi/perkalian/hint/hint1.1.mp4",
                },
                {
                    judul : "Langkah 2",
                    text: `Setelah itu, sederhanakan lah dari hasil perkalian pecahan tersebut
                    15 / 6 = ... ?
                    `,
                    suara: "../asset/audio/materi/perkalian/hint/hint1.2.mp4",
                },
                {
                    judul : "Langkah 3",
                    text: `15 dan 6 bisa dibagi dengan 3, menjadi ... ?
                    `,
                    suara: "../asset/audio/materi/perkalian/hint/hint1.3.mp4",
                },
            ],
            linkHint : "https://youtu.be/UAughJJJe3I"
        },
        {
            question: "2. Seorang petani memiliki ladang sepanjang 1 3/7 kilometer. Jika petani tersebut ingin membangun pagar sepanjang dua kali panjang ladangnya, berapa panjang total pagar yang akan dibangun petani tersebut?",
            options: [
                {
                    id: 'A',
                    text: '1 1/7 km',
                },
                {
                    id: 'B',
                    text: '1 4/7 km',
                },
                {
                    id: 'C',
                    text: '2 6/7 km',
                },
                {
                    id: 'D',
                    text: '3 5/7 km',
                },
            ],
            correctAnswer: 'C',
            stepsHint : [
                {
                    judul : "Langkah 1",
                    text : `Petani memiliki ladang sepanjang 1 3/7 kilometer. Dia ingin membangun 2x panjang ladangnya.`,
                    suara: "../asset/audio/materi/perkalian/hint/hint2.1.mp4",
                },
                {
                    judul : "Langkah 2",
                    text: `Pertama-tama ubahlah pecahan campuran ke pecahan biasa terlebih dahulu
                    1 3/7 = … ?
                    `,
                    suara: "../asset/audio/materi/perkalian/hint/hint2.2.mp4",
                },
                {
                    judul : "Langkah 3",
                    text: `Lalu kalikan pecahan tersebut
                    10/7 x 2 = … ?
                    `,
                    suara: "../asset/audio/materi/perkalian/hint/hint2.3.mp4",
                },
                {
                    judul : "Langkah 4",
                    text: `Dan yang terakhir ubahlah kepecahan campuran.
                    20/7 = ... ?
                    `,
                    suara: "../asset/audio/materi/perkalian/hint/hint2.4.mp4",
                },
            ],
            linkHint : "https://youtu.be/EHPItFfsjNA"
        },
        {
            question: "3. Rizky memiliki sebatang pohon apel di halaman belakang rumahnya. Setiap hari, dia memetik 2 3/2 dari apel yang matang di pohon. Jika ada 6 2/1 apel yang matang hari ini, berapa banyak apel yang akan Rizky petik?",
            options: [
                {
                    id: 'A',
                    text: '28 apel',
                },
                {
                    id: 'B',
                    text: '27 apel',
                },
                {
                    id: 'C',
                    text: '26 apel',
                },
                {
                    id: 'D',
                    text: '25 apel',
                },
            ],
            correctAnswer: 'A',
            stepsHint : [
                {
                    judul : "Langkah 1",
                    text : `Ubahlah kedua bilangan tersebut ke bilangan pecahan biasa
                    2 3/2 = … ? dan 6 2/1 = … ?
                    `,
                    suara: "../asset/audio/materi/perkalian/hint/hint3.1.mp4",
                },
                {
                    judul : "Langkah 2",
                    text: `Setelah itu, kalikan kedua bilangan tersebut
                    7/2 x 8 = … ?
                    `,
                    suara: "../asset/audio/materi/perkalian/hint/hint3.2.mp4",
                },
                {
                    judul : "Langkah 3",
                    text: "Apakah kamu sudah mengetahui jawabannya?",
                    suara: "../asset/audio/materi/perkalian/hint/hint3.3.mp4",
                },
            ],
            linkHint : "https://youtu.be/jb6pKDXPaHU"
        },
    ];

    const currentQuestionData = questionsPerkalian[currentQuestion - 1];

    const playAudioMateri = () => {
        let audioPath;
        if (isCorrect) {
            audioPath = "../asset/audio/materi/perkalian/hint/hintbenar.mp4";
        } else {
            audioPath = "../asset/audio/materi/perkalian/hint/hintsalah.mp4";
        }

        const audio = new Audio(audioPath);
    
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
        } else {
            audio.play();
        }
    
        setIsPlaying(!isPlaying);
    };

    const handleAnswerSelect = (answer) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
            setWrongAnswer(null);
        }
    };

    const handleSubmit = () => {
        if (selectedAnswer === currentQuestionData.correctAnswer) {
            setMessage("Wow kamu melakukannya dengan baik!");
            setShowHintButton(false);
            setShowHint(false);
            setIsCorrect(true);
            setIsAnswered(true);
            setButtonSuara(true)
            setImagePath("../asset/agen/guru.png");

            setTimeout(() => {
                setMessage(null);
                setIsCorrect(false);
            }, 6000);
        } else {
            setWrongAnswer(selectedAnswer);
            setHintCount(hintCount + 1);
            setButtonSuara(true);
            setImagePath("../asset/agen/sedih.png");

            if (hintCount === maxWrongAttemptsBeforeHint - 1) {
                setShowHintButton(true);
                setMessage("Hmm… Sepertinya kita harus coba lagi. Kamu bisa gunakan tombol hint dan vidio untuk bantuan. Semangat ya!");

                setTimeout(() => {
                    setMessage(null);
                },9000);
            } else {
                setMessage(null);
            }
        }
    };

    const handleNext = () => {
        if (currentHintIndex < currentQuestionData.stepsHint.length - 1) {
            setCurrentHintIndex(currentHintIndex + 1);
        }
    };

    const handleSelesai = () => {
        setShowHint(false);
    }

    const handlePrevious = () => {
        if (currentHintIndex > 0) {
            setCurrentHintIndex(currentHintIndex - 1);
        }
    };

    const audioSrcPerkalian = (() => {
        if (stepsHint && stepsHint[currentHintIndex]) {
            return stepsHint[currentHintIndex].suara || "";
        }
        return "";
    })();

    const handleHintClick = () => {
        const currentQuestionData = questionsPerkalian[currentQuestion - 1];
        setShowHint(true);
        setstepsHint(currentQuestionData.stepsHint);
        setCurrentHintIndex(0);
    };

    const handleVideoClick = () => {
        const youtubeLink = currentQuestionData.linkHint;

        if (youtubeLink) {
            window.open(youtubeLink, '_blank');
        } else {
            console.log("YouTube link not available for this question");
        }
    };

    const handleNextClick = () => {
        if (currentQuestion < questionsPerkalian.length) {
            setCurrentQuestion(currentQuestion + 1);
            resetState();
        } else {
            navigate('/materi_pembagian');
        }
    };

    const resetState = () => {
        setSelectedAnswer(null);
        setWrongAnswer(null);
        setHintCount(0);
        setShowHintButton(false);
        setShowHint(false);
        setMessage(null);
        setIsCorrect(false);
        setIsAnswered(false);
        setstepsHint(null);
    };

    return (
        <section id='materi_posttest'>
            <Navbar />
            <div className='agenped font-[georgia] overflow-hidden'>
                <div className="container mx-auto p-4">
                    <div className="bg-white p-5 rounded">
                        <h1 className='font-bold text-center text-2xl mb-4'>Latihan Soal Perkalian</h1>
                        <div className='border-2 h-auto p-4 text-center'>
                            <p className='mb-4'>
                                {currentQuestionData.question}
                            </p>

                            <ul className='text-left text-sm'>
                                {currentQuestionData.options.map((option) => (
                                    <li key={option.id} className='mb-5 hover:text-[#1769BA]'>
                                        <label className={`${wrongAnswer === option.id ? 'text-red-500' : ''} ${selectedAnswer === option.id && isCorrect ? 'text-green-500' : ''}`}>
                                            <input
                                                type="radio"
                                                name="answer"
                                                value={option.id}
                                                checked={selectedAnswer === option.id}
                                                onChange={() => handleAnswerSelect(option.id)}
                                                className='mr-2 bg-black'
                                                disabled={isAnswered}
                                            />
                                            {option.text}
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            {!isAnswered ? (
                                <button
                                    className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'
                                    onClick={handleSubmit}
                                    disabled={selectedAnswer === null}
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'
                                    onClick={handleNextClick}
                                >
                                    {currentQuestion < questionsPerkalian.length ? 'Selanjutnya' : 'Selesai'}
                                </button>
                            )}

                            {showHintButton && (
                                <div className='items-center mt-4'>
                                    <button
                                        className=''
                                        onClick={handleHintClick}
                                        disabled={hintCount < maxWrongAttemptsBeforeHint}
                                    >
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 20">
                                            <path d="M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7Zm0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2Z"/>
                                        </svg>
                                    </button>
        
                                    <button
                                        className='ml-4'
                                        onClick={handleVideoClick}
                                        disabled={hintCount < maxWrongAttemptsBeforeHint}
                                    >
                                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                                        </svg>
                                    </button>
                                </div>
                            )}

                        </div>

                        {showHint && (
                        <div className='mt-4'>
                            {stepsHint && (
                                <>
                                    <h1 className='text-2xl font-bold mb-4 mt-6'>{stepsHint[currentHintIndex].judul}</h1>
                                    <p style={{ whiteSpace: "pre-line" }}>
                                        {stepsHint[currentHintIndex].text}
                                    </p>

                                    {userKelas === "kelas-eksperiment" && (
                                        <audio controls autoPlay src={audioSrcPerkalian} className='m-auto mt-2'/>
                                    )}
                                    
                                    <div className='flex justify-between'>
                                        {currentHintIndex > 0 && (
                                            <button
                                                className='btn'
                                                onClick={handlePrevious}
                                                disabled={currentHintIndex === 0}
                                            >
                                                Kembali
                                            </button>
                                        )}
                                        {currentHintIndex === stepsHint.length - 1 ? (
                                            <button
                                            className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                                            onClick={handleSelesai}
                                            disabled={currentHintIndex === stepsHint.length - 1}
                                        >
                                            Selesai
                                        </button>
                                    ) : (
                                        <button
                                            className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                                            onClick={handleNext}
                                            disabled={currentHintIndex === stepsHint.length - 1}
                                        >
                                            Selanjutnya
                                        </button>
                                        )}

                                        
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    </div>
                </div>

                {userKelas === "kelas-eksperiment" && (
                    <aside className='mt-12'>
                        <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                            <img src={imagePath} alt="" width={230} className='mx-auto' />
                            <p>
                                {message && (
                                    <div className='px-4 py-6 text-justify'>
                                        {message}
                                        
                                    </div>
                                )}
                            </p>
                        </div>

                        <div className='text-center font-[georgia] mt-4'>
                            {buttonSuara && (
                                <>
                                    <p>Klik tombol dibawah ini untuk memakai suara!</p>
                                    <button className='btn mt-4' onClick={playAudioMateri}>
                                        {isPlaying ? 'Hentikan' : 'Suara'}
                                    </button>
                                </>
                            )}
                        </div>
                    </aside>
                )}
            </div>
        </section>
    );
}

export default LatsolPerkalian;
