import React, { useState } from 'react'
import cv from '../assets/cv.pdf'
import Modal from './Modal'

function NavBar() {
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  };
  return (
    <nav className='z-10 text-neutral-400 flex justify-between items-center min-w-full shadow-sm py-4 px-5 bg-slate-50 dark:bg-black'>
      <div>
        <h1 className='text-sm'>Portfolio</h1>
      </div>
      <section className='flex flex-row gap-3'>
        <section className='navbar-item'>
          <a href="#about" className='link item-link text-sm'>
            Sobre mi
            <span className="item-link-one"></span>
          </a>
        </section>
        <section className='navbar-item'>
          <a className='link item-link text-sm' onClick={() => {
            setShow(true)
          }} >
            Contacto
            <span className="item-link-one"></span>
          </a>
        </section>
        <section className='navbar-item'>
          <a href="#projects" className='link item-link text-sm'>
            Proyectos
            <span className="item-link-one"></span>
          </a>
        </section>
        <section className='navbar-item'>
          <a href={cv} download className='link item-link text-sm'>
            Curriculum
            <span className="item-link-one"></span>
          </a>
        </section>
        <Modal show={show} handleClose={handleClose}></Modal>
      </section>
    </nav>
  )
}

export default NavBar