import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

const TabelHasilPretest = () => {
  const [dataPretest, setDataPretest] = useState([]);
  const loggedInUsername = sessionStorage.getItem('NAMA');

  const fetchData = async () => {
    try {
      const res = await getServerData(' https://mathped-be.vercel.app/resultPretest');
      setDataPretest(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = dataPretest.filter((v) => v.usernamePretest === loggedInUsername);

  return (
    <div style={{ overflowY: 'auto', maxHeight: '350px' }}>
      <table className='m-auto'>
        <thead className='text-[16px] bg-[#1D809F] border-2'>
          <tr>
            <td className='border-solid border-2 px-12 border-black text-center'>Name</td>
            <td className='border-solid border-2 px-5 border-black text-center'>Total Menjawab</td>
            <td className='border-solid border-2 px-5 border-black text-center'>Nilai Pretest</td>
            <td className='border-solid border-2 px-5 border-black text-center'>Materi belum dikuasai</td>
            <td className='border-solid border-2 px-5 border-black text-center'>Materi sudah dikuasai</td>
          </tr>
        </thead>

        <tbody>
          {!filteredData.length ? (
            <tr>
              <td colSpan="3" className="text-center">Tidak ada data</td>
            </tr>
          ) : (
            filteredData.map((v, i) => (
              <tr className='table-body' key={i}>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.usernamePretest || ''}</td>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.attemptsPretest || 0}</td>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.pointsPretest || 0}</td>
                <td className='border-solid border-2 px-5 border-black text-center text-red-500'>{v?.refleksiSalahPretest || ''}</td>
                <td className='border-solid border-2 px-5 border-black text-center text-green-500'>{v?.refleksiBenarPretest || ''}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TabelHasilPretest;
