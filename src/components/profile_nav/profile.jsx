import React from 'react'
import Navbar from '../navbar';
import TabelHasil from '../tabelHasil';
import TabelHasilPretest from '../tabelHasilPretest';

const Profile = () => {

  return (
    <section id='profile' className='bg-[#FDFDFD] h-screen'>
        <Navbar/>

        <div className='font-[georgia] max-w-7xl m-auto'>
            <div className='text-center'>
                <h1 className='text-4xl mt-[6%] font-bold'>
                    Hallo, {sessionStorage.getItem('NAMA')}!
                </h1>
                
                <p className='text-base'>Disini halaman untuk melihat progres kamu!</p>
            </div>
            
            <section id='hero'>

                <div className='mt-[5%]'>
                    <div className='w-full h-auto rounded-md outline outline-offset-0 outline-[#D3C5D6]'>
                        <div className='rounded-md bg-[#EBEBEB] p-3 outline outline-offset-0 outline-[#D3C5D6]'>
                            <h1 className='text-lg text-center'>Progress Belajar</h1>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div>
                                <TabelHasilPretest></TabelHasilPretest>
                            </div>
                            <div>
                                <TabelHasil></TabelHasil>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </section>
        </div>
    </section>
  )
}

export default Profile;
