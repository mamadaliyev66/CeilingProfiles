import React from 'react'
import All from './All'
import Computer from './computers/Computer'
import AddComputers from './AddComputers/AddComputers'
import EditComputer from './Edit/Computer/EditComputer'
import DeleteComputer from './Edit/Computer/DeleteComputer'
import NoPage from './NoPage/NoPage'
import Login from './Auth/Login'
import { useEffect } from 'react'
import { Routes,Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Pages() {
    const location= useLocation()
    
  return (
    <Routes location={location}>
      <Route path="/" element={<All/>} />
      <Route path="/computer/:id" element={<Computer/>} />
      <Route path="/add/computer" element={<AddComputers/>} />
      <Route path="/edit/computer/:id" element={<EditComputer/>} />
      <Route path="/delete/computer/:id" element={<DeleteComputer/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<NoPage/>} />


      

    </Routes>
  )
}
