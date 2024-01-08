import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const Loginpage = () => {
  const [nama, setNama] = useState('')
  const [kelas, setKelas] = useState('')
  const [jeniskelas, setJenisKelas] = useState('')
  const [absen, setAbsen] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nama || !kelas || !jeniskelas || !absen || !username || !password) {
      alert("Harap isi semua kolom formulir.");
      return;
    }
    axios.post(' https://mathped-be.vercel.app/signup', {
      nama : nama,
      kelas : kelas,
      jeniskelas : jeniskelas,
      absen : absen,
      username : username,
      password : password
    })
      .then(res => {
        console.log(res.data)
        if(res.data.code === 200) {
          alert('Register Success')
          window.location.href = '/loginpage'
        } else {
          alert("Error")
        }
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <section id='loginpage'>
        <div class="bg-gray-100 flex justify-center items-center h-screen">

            <div class="w-1/2 h-screen hidden lg:block">
                <img src="../asset/sekolah/login.jpg" alt="" className='object-cover w-full h-full'/>
            </div>

            <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 class="text-2xl font-semibold mb-4">Register</h1>

                <form>

                    <div class="mb-4">
                        <label for="name" class="block text-gray-600">Nama Lengkap</label>
                        <input
                        onChange={(e) => {
                          setNama(e.target.value)
                        }}
                        value={nama}
                        type="text" 
                        name="name" 
                        id="name"
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        />
                    </div>

                    <div class="mb-4">
                        <label for="Kelas" class="block text-gray-600">Kelas</label>
                        <select
                          onChange={(e) => {
                            setKelas(e.target.value);
                          }}
                          value={kelas} 
                          type="text"
                          id='kelas'
                          name='kelas'
                          className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        >
                          <option value="" disabled selected>
                            Pilih Kelas
                          </option>
                          <option value="5C">5C</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label for="jeniskelas" class="block text-gray-600">Jenis Kelas</label>
                        <select
                          onChange={(e) => {
                            setJenisKelas(e.target.value)
                          }}
                          value={jeniskelas}
                          name="jeniskelas" 
                          id="jeniskelas"
                          className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        >
                          <option value="" disabled selected>
                            Pilih Jenis Kelas
                          </option>
                          <option value="kelas-kontrol">Kelas Kanan</option>
                          <option value="kelas-eksperiment">Kelas Kiri</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label for="absen" class="block text-gray-600">No Absen</label>
                        <input
                        onChange={(e) => {
                          setAbsen(e.target.value)
                        }}
                        value={absen}
                        type="text" 
                        name="absen" 
                        id="absen"
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        />
                    </div>

                    <div class="mb-4">
                        <label for="username" class="block text-gray-600">Username</label>
                        <input
                        onChange={(e) => {
                          setUserName(e.target.value)
                        }}
                        value={username}
                        type="text" 
                        name="username" 
                        id="username"
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        />
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-gray-600">Password</label>
                        <input
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                        value={password}
                        type="text" 
                        name="password" 
                        id="password"
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        />
                    </div>

                    <button
                    onClick={handleSubmit} 
                    type="submit" 
                    class="bg-[#1D809F]  text-white font-semibold rounded-md py-2 px-4 w-full">
                        Register
                    </button>

                </form>

            </div>
        </div>

    </section>
  )
}

export default Loginpage;
