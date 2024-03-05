import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Getuser from './axios/Getuser'
import Adduser from './axios/Adduser'
import './style.css'
import UpdateUser from './axios/Updateuser'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Getuser />} />
                    <Route path="/add" element={<Adduser />} />
                    <Route path="/update/:id" element={<UpdateUser />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App