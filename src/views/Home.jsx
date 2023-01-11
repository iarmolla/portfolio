import React, { useState } from 'react'
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
import { Formik } from 'formik'
import { useForm } from '@formspree/react';
import Form from '../components/Form'

function Home() {
  const [state, submit] = useForm('mdovnqgv')
  const [showModal, setShowModal] = useState(false);

  return (
    <main className='lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-scroll'>
      {/* <section className='h-screen text-center flex flex-col gap-3 justify-center items-center xl:m-0 one mt-24 mb-10 lg:m-0 '> */}
      <section className='text-center flex flex-col gap-3 justify-center items-center xl:m-0 one lg:h-screen mt-24 mb-10 lg:m-0'>

        <article className='w-full xl:h-screen  flex flex-col justify-center items-center justify-items-center'>
          <h1 className='text-slate-700 title text-5xl xl:text-9xl'>Iván Armolla</h1>
          <h2 className='text-4xl text-slate-800 xl:text-7xl'>Front-end Developer.</h2>
          <div className='hidden xl:block xl:text-5xl xl:mt-16 xl:text-slate-600 xl:cursor-pointer xl:animate-bounce xl:hover:text-slate-500 xl:transition-all'>
            <a href="#about">
              <AiOutlineArrowDown></AiOutlineArrowDown>
            </a>
          </div>
        </article>
      </section>
      <section className='text-center flex flex-col gap-3 justify-center items-center xl:m-0 two lg:h-screen'>
        <div className='xl:block'>
          <button className='link-project text-slate-500 text-2xl text-center rounded-sm uppercase p-2' id="about">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sobre mi
          </button>
        </div>
        <article>
          <p className='text-gray-600 mx-6 md:mx-48 xl:text-2xl' >
            ¡Hola! mi nombre es Iván y me gusta el mundo de desarrollo web. Empecé a introducirme a este mundo, por mi interes en el desarrollo de videojuegos, que siempre fuí muy apasionado. Al finalizar la secundaria empecé a investigar como desarrollar juegos y me encontre con el desarrollo web, decidi a hacer algunos cursos de html y css para ir sentando bases en el desarrollo y meterme en la tecnicatura de analisis de sistemas para poder formarme.
          </p>
        </article>
        <article className='flex justify-center gap-8 cursor-pointer text-gray-600 py-6 text-3xl'>          
           <a href="https://www.linkedin.com/in/ivan-pablo-armolla-7b5856219/" target={'_blank'}>
           <BsLinkedin className='hover:text-slate-500 transition-all'></BsLinkedin>
          </a>          
          <a href="mailto:ivan.armolla@gmail.com?" target={'_blank'}>
          <SiGmail className='hover:text-slate-500 transition-all'></SiGmail>
          </a>      
          <a href="https://github.com/iarmolla" target={'_blank'}>
            <BsGithub className='hover:text-slate-500 transition-all'></BsGithub>
          </a>
        </article>
        <div className='hidden xl:block xl:text-5xl xl:mt-7 xl:text-slate-600 xl:cursor-pointer xl:animate-bounce xl:hover:text-slate-500 xl:transition-all'>
          <a href="#skills">
            <AiOutlineArrowDown></AiOutlineArrowDown>
          </a>
        </div>
      </section>
      <section className='text-center flex flex-col gap-3 justify-center items-center xl:m-0 lg:h-screen three' id="skills">
        <h4 className='link-project text-slate-500 text-2xl text-center rounded-sm uppercase p-2 mb-16 lg:mt-0'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HABILIDADES
        </h4>
        <section className='rounded-md text-center font-sans'>
          <div className='flex flex-col justify-center items-center  gap-14 text-8xl uppercase font-medium sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4'>
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

      </section>
      <section className='text-center flex flex-col gap-3 justify-center items-center xl:m-0 lg:pb-32 four' >
        <section className='flex flex-col justify-center items-center gap-4 lg:pb-24' id="projects">
          <h4 className='link-project text-slate-500 text-2xl mt-14 text-center rounded-sm uppercase p-2 lg:mt-20' >
            <span></span>
            <span></span>
            <span></span>
            <span></span>proyectos</h4>
          <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 m-3 sm:mx-20 md:mx-20 lg:mx-24 xl:mx-48'>
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold'>Ecommerce</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/ecommerce-api">
                  <FiGithub></FiGithub>
                </a>
                <a href="https://ecommerce-167.netlify.app/" target={'_blank'}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
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
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold'>giphy-app</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/giphy-app" target={"_blank"}>
                  <FiGithub></FiGithub>
                </a>
                <a href="https://giphy-645.netlify.app/" target={"_blank"}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
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
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold'>Kanban-app</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/kanban-app" target={"_blank"}>
                  <FiGithub></FiGithub>
                </a>
                <a href="#" target={"_blank"}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
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
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold'>Rick and Morty API</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/rick-and-morty-react">
                  <FiGithub></FiGithub>
                </a>
                <a href="https://magenta-hummingbird-5754c9.netlify.app/" target={"_blank"}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
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
      </section>
      <section className="five" id="contact">
        <div className="mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight text-zinc-400 text-center mt-6">Enviame un mensaje!</h2>
          <p className="lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Si tienes alguna pregunta o quieres contactarme puedes usar el formulario</p>

          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={(values) => {
              let errors = {}
              if (!values.message) {
                errors.message = "* El mensaje no puede estar vacio *"
              }
              if (!values.name) {
                errors.name = "* El nombre no puede estar vacio *"
              }
              if (!values.email) {
                errors.email = '* El mail no puede estar vacio *';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = '* Direccion invalida revise su direccion *';
              }
              return errors
            }}
            onSubmit={(values, { resetForm }) => {
              submit(values)
              setShowModal(true)
              resetForm()
              setTimeout(() => setShowModal(false), 3000)
            }}
          >
            {({ handleSubmit,
              errors,
              values,
              touched,
              handleChange,
              handleBlur
            }) => (
              <form className="space-y-8 mb-7 mx-1" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm dark:text-gray-400" >Nombre</label>
                  <input type="text" id="name" onBlur={handleBlur} value={values.name} onChange={handleChange} className={`block p-3 w-full text-sm  bg-gray-50 rounded-lg shadow-sm outline-none border`} placeholder="Ingrese su nombre" name="name" required />
                  <label className={`${touched.name && errors.name ? 'error-text  text-sm font-semibold text-red-500' : 'hidden'}`}>{touched.name && errors.name}</label>
                </div>

                <div>
                  <label htmlFor="email" className={`block mb-2 text-sm  text-gray-900 dark:text-gray-300`}>Email</label>
                  <input type="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={`shadow-sm bg-gray-50  text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 border border-gray-300`} placeholder="nombre@gmail.com" required name="email" />
                  <label className={`${touched.email && errors.email ? 'error-text  text-sm font-semibold text-red-500' : 'hidden'}`}>{touched.email && errors.email}</label>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm  text-gray-900 dark:text-gray-400" >Mensage</label>
                  <textarea id="message" rows="6" onChange={handleChange} onBlur={handleBlur} value={values.message} className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm outline-none border border-gray-300 `} placeholder="Tu mensaje" required name="message"></textarea>
                  <label className={`${touched.message && errors.message ? 'error-text  text-sm font-semibold text-red-500' : 'hidden'}`}>{touched.message && errors.message}</label>
                </div>
                {
                  !errors.name && !errors.email && !errors.message &&
                  <div className='flex justify-center'>
                    <button type="submit" disabled={state.submitting} className={`${!errors.name && !errors.email && !errors.message ? 'submit' : 'hidden'} py-1 px-24 text-lg font-medium text-center  border-2 border-slate-400 hover:bg-slate-200 hover:transition-transform transition-all text-zinc-400 rounded-md bg-primary-70 outline-none`}>Enviar</button>
                  </div>
                }
              </form>
            )}
          </Formik>
          <Form setShowModal={setShowModal} showModal={showModal}></Form>
        </div>
      </section>
    </main>
  )
}

export default Home
