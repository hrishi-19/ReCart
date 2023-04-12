import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import RegisterPage from '../Pages/registerPage'
import LoginPage from '../Pages/loginPage'
import HomeLayout from './homeLayout'

function RootLayout() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/home' element={<HomeLayout/>}/>
            </Routes>   
        </div>
    )
}

export default RootLayout
