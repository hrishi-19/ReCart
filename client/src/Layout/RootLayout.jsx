import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import RegisterPage from '../Pages/registerPage'
import LoginPage from '../Pages/loginPage'
import ProfilePage from '../Pages/profilePage'
import AddProducts from '../Pages/addProducts'
import MyProducts from '../Pages/myProducts'
import Inbox from '../Pages/inbox'
import HomePage from '../Pages/homePage'
import ProductPage from '../Pages/productPage'

function RootLayout() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/home' >
                    <Route path='' ele element={<HomePage />} />
                    <Route path='profile' element={<ProfilePage />} />
                    <Route path='add-product' element={<AddProducts />} />
                    <Route path='my-products' element={<MyProducts />} />
                    <Route path='inbox' element={<Inbox />} />
                </Route>
                <Route path='/product/:id' element={<ProductPage/>}/>
            </Routes>
        </div>
    )
}

export default RootLayout
