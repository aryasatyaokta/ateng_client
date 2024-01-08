import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Loginpage = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(' https://mathped-be.vercel.app/signin', {
        username : username,
        password : password
        })
        .then(res => {
            console.log(res.data)

            if (res.data.code === 500) {
                alert('User Not Found')
            }
            if (res.data.code === 404) {
                alert('Password is wrong')
            }
            if (res.data.code === 200) {
                // move to home
                navigate('/dashboard')
                sessionStorage.setItem('TOKEN', res.data.token)
                sessionStorage.setItem('NAMA', res.data.nama)
                sessionStorage.setItem('JENISKELAS', res.data.jeniskelas)
            }
        }).catch(err => {
            console.log(err)
        })

    }

    useEffect(() => {
        const storedToken = sessionStorage.getItem('TOKEN');
        const storedName = sessionStorage.getItem('NAMA');
        if (storedToken && storedName){
          navigate('/dashboard')
        } 
      }, [])

  return (
    <section id='loginpage'>
        <div class="bg-gray-100 flex justify-center items-center h-screen">

            <div class="w-1/2 h-screen hidden lg:block">
                <img src="../asset/sekolah/login.jpg" alt="" className='object-cover w-full h-full'/>
            </div>

            <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 class="text-2xl font-semibold mb-4">Login</h1>

                <form>

                    <div class="mb-4">
                        <label for="username" class="block text-gray-600">Username</label>
                        <input
                        onChange={(e) => {
                            setUserName(e.target.value)
                          }}
                        value={username} 
                        type="text"
                        id='username'
                        name='username'
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
                        type="password"
                        id='password'
                        name='password'
                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none'
                        />
                    </div>

                    <button
                    onClick={handleSubmit} 
                    type="submit" 
                    class="bg-[#1D809F]  text-white font-semibold rounded-md py-2 px-4 w-full">
                        Masuk
                    </button>

                </form>

                <div class="mt-6 text-center">
                    <p>Daftar sebagai siswa pada aplikasi ini?</p>
                    <Link to={'/registrasi'}>
                        <p className='hover:underline text-blue-500'>Daftar Disini!</p>
                    </Link>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Loginpage;
