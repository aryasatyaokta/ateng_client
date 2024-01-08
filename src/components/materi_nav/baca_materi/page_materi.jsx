import React from 'react'
import Navbar from '../../navbar'
import { Link } from 'react-router-dom'

const Page_materi = () => {
  return (
    <section id='page_materi'>
        <Navbar/>

        <div>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <img src="../asset/materi/pecahandanpembagian.png" alt="materi" className='h-[550px]'/>
                </div>
                <Link to={'/materi_perkalian'}>
                    <button className='btn mt-4'>
                        Lanjutkan
                    </button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Page_materi
