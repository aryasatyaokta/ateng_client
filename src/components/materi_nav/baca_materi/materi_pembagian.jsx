import React, {useState} from 'react'
import Navbar from '../../navbar'
import { useNavigate } from 'react-router-dom';

const Materi_pembagian = () => {
    const [currentStepPembagian, setCurrentStepPembagian] = useState(0);
    const [currentMateriIndexPembagian, setCurrentMateriIndexPembagian] = useState(0);
    const [showStepsPembagian, setshowStepsPembagian] = useState(false);
    const [audioSrcPembagian, setAudioSrcPembagian] = useState('');
    const [showMessage, setShowMessage] = useState(true);
    const userKelas = sessionStorage.getItem('JENISKELAS');

    const navigate = useNavigate()

    const materiPembagian = [
      {
          question: "1. Arfan membeli 6 kg tepung untuk membuat kue. Setiap adonan butuh 3/4 kg tepung. Jadi, berapa banyak adonan yang bisa dibuat?",
          options: [
              {
                  id: 'A',
                  text: "8 adonan",
              },
              {
                  id: 'B',
                  text: "7 adonan",
              },
              {
                  id: 'C',
                  text: "6 adonan",
              },
              {
                  id: 'D',
                  text: "5 adonan",
              },
          ],
          stepsMateriPembagian : [
              {
                  judul: "Langkah 1",
                  konten: "Arfan membeli 6 kg tepung dan setiap adonan membutuhkan 3/4 kg tepung",
                  gambar: "/../asset/step/pembagian/step1.1.png",
                  suara : "../asset/audio/materi/pembagian/step1.1.mp4"
              },
              {
                  judul: "Langkah 2",
                  konten: "Untuk membagi pecahan. Ubahlah posisi pembilang dan penyebutnya, lalu bagi dengan angka yang bisa dibagi oleh keduanya",
                  gambar: "/../asset/step/pembagian/step1.2.png",
                  suara : "../asset/audio/materi/pembagian/step1.2.mp4"
              },
              {
                  judul: "Langkah 3",
                  konten: "Jawaban yang benar adalah A",
                  gambar: "/../asset/step/pembagian/step1.3.png",
                  suara : "../asset/audio/materi/pembagian/step1.3.mp4"
              },
          ],
      },
      {
            question: "2. Sebatang besi yang panjangnya 3 m memiliki berat 2 1/4. Berapa berat per meternya?",
            options: [
              {
                  id: 'A',
                  text: "1/4 m",
              },
              {
                  id: 'B',
                  text: "3/4 m",
              },
              {
                  id: 'C',
                  text: "2/3 m",
              },
              {
                  id: 'D',
                  text: "2/5 m",
              },
          ],
          stepsMateriPembagian : [
              {
                  judul: "Langkah 1",
                  konten: "Sebatang besi memiliki panjang 3 meter dan berat 2 1/4.",
                  gambar: "/../asset/step/pembagian/step2.1.png",
                  suara : "../asset/audio/materi/pembagian/step2.1.mp4"
              },
              {
                  judul: "Langkah 2",
                  konten: "Ubahlah pecahan campuran menjadi pecahan biasa terlebih dahulu",
                  gambar: "/../asset/step/pembagian/step2.2.png",
                  suara : "../asset/audio/materi/pembagian/step2.2.mp4"
              },
              {
                  judul: "Langkah 3",
                  konten: "Untuk membagi pecahan. Ubahlah posisi pembilang dan penyebutnya, lalu bagi dengan angka yang bisa dibagi oleh keduanya",
                  gambar: "/../asset/step/pembagian/step2.3.png",
                  suara : "../asset/audio/materi/pembagian/step2.3.mp4"
              },
              {
                  judul: "Langkah 4",
                  konten: "Jawaban yang benar adalah B",
                  gambar: "/../asset/step/pembagian/step2.4.png",
                  suara : "../asset/audio/materi/pembagian/step2.4.mp4"
              },
          ],
      },
      {
          question: "3. Kayla memiliki sebuah pita berukuran 2 3/4 m. Kayla ingin memotong pita tersebut menjadi beberapa bagian berukuran 1 1/2 m. Berapa banyak potongan pita yang dibuat Kayla?",
          options: [
              {
                  id: 'A',
                  text: "1 7/12 potong",
              },
              {
                  id: 'B',
                  text: "3 1/9 potong",
              },
              {
                  id: 'C',
                  text: "1 5/6 potong",
              },
              {
                  id: 'D',
                  text: "4 1/8 potong",
              },
          ],
          stepsMateriPembagian : [
              {
                  judul: "Langkah 1",
                  konten: "Kayla memiliki pita 2 3/4 m dan ingin dibagikan menjadi 1 1/2 m.",
                  gambar: "/../asset/step/pembagian/step3.1.png",
                  suara : "../asset/audio/materi/pembagian/step3.1.mp4"
              },
              {
                  judul: "Langkah 2",
                  konten: "Ubahlah pecahan campuran menjadi pecahan biasa terlebih dahulu",
                  gambar: "/../asset/step/pembagian/step3.2.png",
                  suara : "../asset/audio/materi/pembagian/step3.2.mp4"
              },
              {
                  judul: "Langkah 3",
                  konten: "Untuk membagi pecahan. Ubahlah posisi pembilang dan penyebutnya, lalu bagi dengan angka yang bisa dibagi oleh keduanya",
                  gambar: "/../asset/step/pembagian/step3.3.png",
                  suara : "../asset/audio/materi/pembagian/step3.3.mp4"
              },
              {
                  judul: "Langkah 4",
                  konten: "Jika pecahan tersebut bisa disederhanakan, sederhanakanlah pecahan tersebut",
                  gambar: "/../asset/step/pembagian/step3.4.png",
                  suara : "../asset/audio/materi/pembagian/step3.4.mp4"
              },
              {
                  judul: "Langkah 5",
                  konten: "Jawaban yang benar adalah C",
                  gambar: "/../asset/step/pembagian/step3.5.png",
                  suara : "../asset/audio/materi/pembagian/step3.5.mp4"
              },
          ],
      },
  ];

    const handleNext = () => {
        if (currentStepPembagian < materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian.length - 2) {
            setCurrentStepPembagian(currentStepPembagian + 1);
            setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian + 1].suara);
        } else if (currentStepPembagian === materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian.length - 2) {
            if (currentMateriIndexPembagian === 1) {
                setShowMessage("Ayoo, bentar lagi kamu selesai!");
            } else if (currentMateriIndexPembagian === 2) {
                setShowMessage("Kamu sudah hampir selesai membaca materinya!");
            } else {
                setShowMessage("Semangat ya belajar nya!");
            }
            setCurrentStepPembagian(currentStepPembagian + 1);
            setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian + 1].suara);
        } else {
            if (currentMateriIndexPembagian < materiPembagian.length - 1) {
                setCurrentMateriIndexPembagian(currentMateriIndexPembagian + 1);
                setCurrentStepPembagian(0);
                setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian + 1].stepsMateriPembagian[0].suara);
                setShowMessage("");
            } else {
                navigate('/latihan_soal_pembagian');
                setShowMessage("");
            }
        }
    };

  const handlePrevious = () => {
    if (currentStepPembagian > 0) {
        setCurrentStepPembagian(currentStepPembagian - 1);
        setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian - 1].suara);
    } else {
        if (currentMateriIndexPembagian > 0) {
            setCurrentMateriIndexPembagian(currentMateriIndexPembagian - 1);
            setCurrentStepPembagian(materiPembagian[currentMateriIndexPembagian - 1].stepsMateriPembagian.length - 1);
            setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian].suara);
        }
    }
};

const handleStart = async () => {
  setshowStepsPembagian(true);
  setAudioSrcPembagian(materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian].suara);
};
    
  return (
    <section>
            <Navbar />
            <div className='agenped font-[georgia]'>
                <div className="container mx-auto mt-10">
                    <div>
                        <div className='border-2 h-auto p-4 text-center'>
                            <p>{materiPembagian[currentMateriIndexPembagian].question}</p>
                            <ul>
                                {materiPembagian[currentMateriIndexPembagian].options.map((option) => (
                                    <li key={option.id} className='mt-3'>{`${option.id}. ${option.text}`}</li>
                                ))}
                            </ul>
                        </div>

                        {!showStepsPembagian && (
                            <button
                                className="btn mt-12"
                                onClick={handleStart}
                            >
                                Mulai
                            </button>
                        )}

                        {showStepsPembagian && materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian && materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian.length > 0 && (
                            <>
                                <h2 className="text-2xl font-bold mb-4 mt-6">
                                    {materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian]?.judul}
                                </h2>
                                <p style={{ whiteSpace: "pre-line" }}>{materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian]?.konten}</p>
                                <img src={materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian[currentStepPembagian]?.gambar} alt="Step" className='m-auto' />

                                {userKelas === "kelas-eksperiment" && (
                                    <audio controls autoPlay src={audioSrcPembagian} className='m-auto mt-2'/>
                                )}

                                <div className="flex justify-between mt-4">
                                    {currentStepPembagian > 0 && (
                                        <button
                                            className="btn"
                                            onClick={handlePrevious}
                                        >
                                            Kembali
                                        </button>
                                    )}
                                    {currentStepPembagian === materiPembagian[currentMateriIndexPembagian].stepsMateriPembagian.length - 1 ? (
                                        <button
                                            className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                                            onClick={handleNext}
                                            disabled={!showStepsPembagian}
                                        >
                                            Selesai
                                        </button>
                                    ) : (
                                        <button
                                            className="rounded-[8px] py-[10px] px-[20px] mr-1 mb-1 bg-[#3794b0] text-white hover:bg-[#1769BA]"
                                            onClick={handleNext}
                                            disabled={!showStepsPembagian}
                                        >
                                            Selanjutnya
                                        </button>
                                    )}
                                </div>
                            </>
                        )}

                    </div>
                </div>

                {userKelas === 'kelas-eksperiment' && (
                    <div className='border-2 rounded-xl h-[400px] w-[50%] mx-auto overflow-hidden shadow-xl'>
                    <img src='../asset/agen/guru.png' alt='' width={230} className='mx-auto' />
                    <p>
                        {showMessage && (
                        <div className='px-4 py-6 text-justify'>
                            {showMessage}
                        </div>
                        )}
                    </p>
                    </div>
                )}
            </div>
        </section>
  )
}

export default Materi_pembagian
