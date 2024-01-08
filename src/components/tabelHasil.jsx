import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

const TabelHasil = () => {
  const [data, setData] = useState([]);
  const loggedInUsername = sessionStorage.getItem('NAMA');

  useEffect(() => {
    getServerData(' https://mathped-be.vercel.app/result', (res) => {
      setData(res);
    });
  }, []);

  const filteredData = data.filter((v) => v.username === loggedInUsername);

  return (
    <div style={{ overflowY: 'auto', maxHeight: '350px' }}> 
      <table className='m-auto'>
        <thead className='text-[16px] bg-[#1D809F] border-2'>
          <tr>
            <td className='border-solid border-2 px-12 border-black text-center'>Name</td>
            <td className='border-solid border-2 px-5 border-black text-center'>Total Menjawab</td>
            <td className='border-solid border-2 px-5 border-black text-center'>Nilai Posttest</td>
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
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.username || ''}</td>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.attempts || 0}</td>
                <td className='border-solid border-2 px-5 border-black text-center'>{v?.points || 0}</td>
                <td className='border-solid border-2 px-5 border-black text-center text-red-500'>{v?.refleksiSalah || ''}</td>
                <td className='border-solid border-2 px-5 border-black text-center text-green-500'>{v?.refleksiBenar || ''}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TabelHasil;
