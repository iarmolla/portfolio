import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"
import { SiGmail, SiTailwindcss } from "react-icons/si"
import { FaHtml5, FaReact, FaBootstrap, FaAngular, FaGitAlt } from "react-icons/fa"
import { AiOutlineArrowDown } from "react-icons/ai"
import { DiJsBadge, DiCss3 } from "react-icons/di"
import { FiGithub } from "react-icons/fi"
import rick from '../assets/rick.PNG'
import kanban from '../assets/kanban.PNG'
import gif from '../assets/gif.PNG'
import ecommerce from '../assets/ecommerce.PNG'



function Home() {
  return (
    <main className='flex justify-center items-center flex-col'>
      <section className='text-center flex flex-col gap-3 justify-center items-center mt-8 xl:m-0'>
        {/* <p className='text-left'>Hi, my name is</p> */}
        <article className='w-full xl:h-screen  flex flex-col justify-center items-center justify-items-center' id="one">
          <h1 className='text-slate-700 title text-5xl xl:text-9xl'>Iván Armolla</h1>
          <h2 className='text-4xl text-slate-800 xl:text-7xl'>Front-end Developer.</h2>
          <div className='hidden xl:block xl:text-5xl xl:mt-16 xl:text-slate-600 xl:cursor-pointer xl:animate-bounce xl:hover:text-slate-500 xl:transition-all'>
            <a href="#about">
              <AiOutlineArrowDown></AiOutlineArrowDown>
            </a>
          </div>
        </article>
        <div className='hidden xl:block' id="two">
          <button className='link-project text-slate-500 text-2xl text-center rounded-sm uppercase p-2' id="about">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sobre mi
          </button>
        </div>
        <article id="two">
          <p className='text-gray-600 mx-6 md:mx-48 xl:text-2xl' >
            ¡Hola! mi nombre es Iván y me gusta el mundo de desarrollo web. Empecé a introducirme a este mundo, por mi interes en el desarrollo de videojuegos, que siempre fuí muy apasionado. Al finalizar la secundaria empecé a investigar como desarrollar juegos y me encontre con el desarrollo web, decidi a hacer algunos cursos de html y css para ir sentando bases en el desarrollo y meterme en la tecnicatura de analisis de sistemas para poder formarme.
          </p>
        </article>
      </section>
      <section className='flex justify-center gap-8 cursor-pointer text-gray-600 py-6 text-3xl'>
        <BsLinkedin className='hover:text-slate-500 transition-all'></BsLinkedin>
        <SiGmail className='hover:text-slate-500 transition-all'></SiGmail>
        <BsGithub className='hover:text-slate-500 transition-all'></BsGithub>
      </section>
      <section id="three">
        <div className='flex flex-col justify-center items-center '>
          <h4 className='link-project text-slate-500 text-2xl text-center rounded-sm uppercase p-2'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            HABILIDADES
          </h4>
          <section className='rounded-md text-center font-sans mb-5'>
            <div className='flex flex-col justify-center items-center gap-14 text-9xl mt-16 uppercase font-medium sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3'>
              <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200'>
                <span className='absolute text-xl -top-10 left-0 text-orange-500'>Html5</span>
                <FaHtml5 className='text-orange-500'></FaHtml5>
              </div>
              <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200'>
                <span className='absolute text-xl -top-10 left-0 text-sky-400'>Css3</span>
                <DiCss3 className='text-sky-400'></DiCss3>
              </div>
              <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200'>
                <span className='absolute text-xl -top-10 left-0 text-indigo-500'>Bootstrap</span>
                <FaBootstrap className='text-indigo-500'></FaBootstrap>
              </div>
              <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200'>
                <span className='absolute text-xl -top-10 left-0 text-sky-500'>Tailwind</span>
                <SiTailwindcss className='text-sky-500'></SiTailwindcss>
              </div>
              <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200'>
                <span className='absolute text-xl -top-10 left-0 text-yellow-400'>Javascript</span>
                <DiJsBadge className='text-yellow-400'></DiJsBadge>
              </div>
              <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200'>
                <span className='absolute text-xl -top-10 left-0 text-cyan-400'>React</span>
                <FaReact className='text-cyan-400'></FaReact>
              </div>
              <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200'>
                <span className='absolute text-xl -top-10 left-0 text-red-600'>Angular</span>
                <FaAngular className='text-red-600'></FaAngular>
              </div>
              <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200'>
                <span className='absolute text-xl -top-10 left-0 text-orange-600'>Git</span>
                <FaGitAlt className='text-orange-600'></FaGitAlt>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center gap-4' id="projects">
        <h4 className='link-project text-slate-500 text-2xl text-center rounded-sm uppercase p-2 mt-4 mb-2' >
          <span></span>
          <span></span>
          <span></span>
          <span></span>proyectos</h4>
        <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 m-3 sm:mx-20 md:mx-20 lg:mx-24 xl:mx-48'>
          {/* <h5 className='uppercase text-left pl-3 text-cyan-500 font-semibold'>Proyecto destacado</h5> */}
          <div className='flex flex-row justify-between'>
            <span className='uppercase text-left pl-3 text-gray-500 font-semibold'>Ecommerce</span>
            <div className='flex flex-row gap-2 text-xl cursor-pointer'>
              <a href="https://github.com/iarmolla/ecommerce-api">
                <FiGithub></FiGithub>
              </a>
              <BiLinkExternal></BiLinkExternal>
            </div>
          </div>
          <div>
            <figure className='flex flex-col justify-center items-center py-2'>
              <img src={ecommerce} className="image-project" alt="ecommerce project" />
            </figure>
          </div>
          <p className='m-3'>Un ecommerce web con distinas secciones de productos, joyeria, tecnologia, ropa y carrito de compras.</p>
          <p className='pl-3'>En lo que es el desarrollo se uso <span className='text-slate-700 uppercase font-semibold'>react-router-dom</span> para manejar las distinas rutas que tendra el ecommerce. Se implemento <span className='uppercase text-slate-700 font-semibold'>Redux</span> para manejar las acciones y el estado de la web app, en la creacion del formulario se uso de libreria formik y las llamadas a la API con implementacion de axios, para el manejo de estilos se uso <span className='uppercase text-indigo-600 font-semibold'>Bootstrap</span> para simplificar el desarrollo.
          </p>
          <div className='flex flex-row gap-3 pl-3 my-5 font-bold'>
            <span>React</span>
            <span>Bootstrap</span>
            <span>Fake store API</span>
          </div>
        </article>
        <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 m-3 md:mx-20 sm:mx-20 lg:mx-24 xl:mx-48'>
          {/* <h5 className='uppercase text-left pl-3 text-cyan-500 font-semibold'>Proyecto destacado</h5> */}
          <div className='flex flex-row justify-between'>
            <span className='uppercase text-left pl-3 text-gray-500 font-semibold'>giphy-app</span>
            <div className='flex flex-row gap-2 text-xl cursor-pointer'>
              <a href="https://github.com/iarmolla/ecommerce-api">
                <FiGithub></FiGithub>
              </a>
              <BiLinkExternal></BiLinkExternal>
            </div>
          </div>
          <div>
            <figure className='flex flex-col justify-center items-center py-2'>
              <img src={gif} className="image-project" alt="gif project" />
            </figure>
          </div>
          <p className='m-3'>Un clon de uno de los buscadores de gifs mas populares.</p>
          <p className='pl-3'>En lo que es el desarrollo para las llamadas a la API se uso <span className='uppercase text-slate-600 font-semibold'>axios,</span> para el manejo de estilos se uso <span className='uppercase text-sky-500 font-semibold'>Tailwind</span>.
          </p>
          <div className='flex flex-row gap-3 pl-3 my-5 font-bold'>
            <span>React</span>
            <span>Tailwind</span>
            <span>Giphy API</span>
          </div>
        </article>
        <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 m-3 md:mx-20 sm:mx-20 lg:mx-24 xl:mx-48'>
          {/* <h5 className='uppercase text-left pl-3 text-cyan-500 font-semibold'>Proyecto destacado</h5> */}
          <div className='flex flex-row justify-between'>
            <span className='uppercase text-left pl-3 text-gray-500 font-semibold'>Kanban-app</span>
            <div className='flex flex-row gap-2 text-xl cursor-pointer'>
              <a href="https://github.com/iarmolla/ecommerce-api">
                <FiGithub></FiGithub>
              </a>
              <BiLinkExternal></BiLinkExternal>
            </div>
          </div>
          <div>
            <figure className='flex flex-col justify-center items-center py-2'>
              <img src={kanban} className="image-project" alt="kanban project" />
            </figure>
          </div>
          <p className='m-3'>Web app de tareas, el proyecto surgio como desafio de <span className='text-gray-500 font-semibold uppercase'>front-end mentor</span>.</p>
          <p className='pl-3'>En lo que es el desarrollo para el manejo de estilos se uso <span className='uppercase text-sky-500 font-semibold'>MUI</span>.
          </p>
          <div className='flex flex-row gap-3 pl-3 my-5 font-bold'>
            <span>React</span>
            <span>MUI</span>
          </div>
        </article>
        <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 m-3 sm:mx-20 md:mx-20 lg:mx-24 xl:mx-48'>
          {/* <h5 className='uppercase text-left pl-3 text-cyan-500 font-semibold'>Proyecto destacado</h5> */}
          <div className='flex flex-row justify-between'>
            <span className='uppercase text-left pl-3 text-gray-500 font-semibold'>Rick and Morty API</span>
            <div className='flex flex-row gap-2 text-xl cursor-pointer'>
              <a href="https://github.com/iarmolla/ecommerce-api">
                <FiGithub></FiGithub>
              </a>
              <BiLinkExternal></BiLinkExternal>
            </div>
          </div>
          <div>
            <figure className='flex flex-col justify-center items-center py-2'>
              <img src={rick} className="image-project" alt="rick and morty project" />
            </figure>
          </div>
          <p className='m-3'>Web app para ver los personajes de <span className='text-gray-500 uppercase font-semibold'>Rick and morty</span> y sus episodios y fechas de estreno, para las llamadas a la API se hizo uso de <span className='text-gray-500 font-semibold uppercase'>AXIOS</span>.</p>
          <p className='pl-3'>para el manejo de estilos se uso <span className='uppercase text-sky-500 font-semibold'>Tailwind</span>.
          </p>
          <div className='flex flex-row gap-3 pl-3 my-5 font-bold flex-wrap'>
            <span>React</span>
            <span>Tailwind</span>
            <span>Rick and Morty API</span>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Home