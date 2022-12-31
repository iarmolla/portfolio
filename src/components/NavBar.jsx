import React from 'react'

function NavBar() {
  return (
      <nav className='z-10 text-neutral-400 flex justify-between items-center min-w-full shadow-sm py-4 px-5 bg-slate-50'>
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
            <a href="#contact" className='link item-link text-sm'>
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
        </section>
      </nav>
  )
}

export default NavBar