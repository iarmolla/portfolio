import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"
import { SiGmail, SiTailwindcss } from "react-icons/si"
import { FaHtml5, FaReact, FaBootstrap, FaAngular, FaGitAlt } from "react-icons/fa"
import { AiOutlineArrowDown } from "react-icons/ai"
import { DiJsBadge, DiCss3 } from "react-icons/di"
import { FiGithub } from "react-icons/fi"
import rick from '../assets/rick.PNG'
import kanban from '../assets/kanban.PNG'
import proet from '../assets/proet.PNG'
import chat from '../assets/chat.PNG'
import gif from '../assets/gif.PNG'
import dashboard from '../assets/dashboard.png'
import ecommerce from '../assets/ecommerce.PNG'

function Home() {
  return (
    <main className='lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-scroll dark:bg-black'>
      <section className='text-center pt-10 sm:pt-24 sm:dark:pt-52 md:dark:pt-32 md:pt-10 dark:m-0 dark:pt-48 dark:pb-14  flex flex-col gap-3 justify-center items-center xl:m-0 one lg:h-screen mt-24 mb-10 lg:m-0 lg:p-0'>
        <article className='w-full xl:h-screen  flex flex-col justify-center items-center justify-items-center'>
          <h1 className='text-slate-700 title text-5xl lg:text-9xl  xl:text-9xl'>Iván Armolla</h1>
          <h2 className='text-4xl text-slate-800 lg:text-4xl xl:text-7xl'>Full Stack Developer.</h2>
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
            Sobre mí
          </button>
        </div>
        <article>
          <p className='text-gray-600 mx-6 md:mx-48 xl:text-2xl' >
            ¡Hola! mi nombre es Iván y me apasiona el desarrollo web y todo lo relacionado. Empecé a introducirme a este mundo, por mí interés en el desarrollo de videojuegos. Al finalizar la secundaria empecé a investigar como desarrollar juegos y a su vez incursioné con el desarrollo web, que al final, me decidí ir por web y hacer algunos cursos de HTML y CSS, para ir sentando bases en el desarrollo, y meterme en la tecnicatura de análisis de sistemas para poder formarme.
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
        <section className='rounded-md text-center font-sans relative'>
          <div className='flex flex-col justify-center items-center gap-14 text-8xl uppercase font-medium sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4'>
            <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200 dark:border-gray-500'>
              <span className='absolute text-xl -top-10 left-0 text-orange-500 dark:text-gray-600'>Html5</span>
              <FaHtml5 className='text-orange-500 dark:text-orange-700'></FaHtml5>
            </div>
            <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200 dark:border-gray-500'>
              <span className='absolute text-xl -top-10 left-0 text-sky-400 dark:text-gray-600'>Css3</span>
              <DiCss3 className='text-sky-400 dark:text-sky-600'></DiCss3>
            </div>
            <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200 dark:border-gray-500'>
              <span className='absolute text-xl -top-10 left-0 text-indigo-500 dark:text-gray-600'>Bootstrap</span>
              <FaBootstrap className='text-indigo-500 dark:text-indigo-700'></FaBootstrap>
            </div>
            <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200 dark:border-gray-500'>
              <span className='absolute text-xl -top-10 left-0 text-sky-500 dark:text-gray-600'>Tailwind</span>
              <SiTailwindcss className='text-sky-500 dark:text-sky-600'></SiTailwindcss>
            </div>
            <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200 dark:border-gray-500'>
              <span className='absolute text-xl -top-10 left-0 text-yellow-400 dark:text-gray-600'>Javascript</span>
              <DiJsBadge className='text-yellow-400 dark:text-yellow-600'></DiJsBadge>
            </div>
            <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200 dark:border-gray-500'>
              <span className='absolute text-xl -top-10 left-0 text-cyan-400 dark:text-gray-600'>React</span>
              <FaReact className='text-cyan-400 dark:text-cyan-600'></FaReact>
            </div>
            <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200 dark:border-gray-500'>
              <span className='absolute text-xl -top-10 left-0 text-red-600 dark:text-gray-600'>Angular</span>
              <FaAngular className='text-red-600 dark:text-red-700'></FaAngular>
            </div>
            <div className='relative shadow-lg p-10 rounded-md border-2 border-gray-200 dark:border-gray-500'>
              <span className='absolute text-xl -top-10 left-0 text-orange-600 dark:text-gray-600'>Git</span>
              <FaGitAlt className='text-orange-600 dark:text-orange-700'></FaGitAlt>
            </div>
          </div>
          <div className='hidden xl:text-5xl xl:mt-7 xl:text-slate-600 xl:cursor-pointer xl:animate-bounce xl:hover:text-slate-500 xl:transition-all xl:absolute xl:w-full xl:flex xl:justify-center xl:items-center'>
            <a href="#projects">
              <AiOutlineArrowDown></AiOutlineArrowDown>
            </a>
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
          <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 dark:border-gray-500 m-3 sm:mx-20 md:mx-20 lg:w-2/4'>
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold mb-4'>Ecommerce</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/ecommerce-api" target={'_blank'}>
                  <FiGithub></FiGithub>
                </a>
                <a href="https://ecommerce-167.netlify.app/" target={'_blank'}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
              </div>
            </div>
            <div>
              <a href="https://ecommerce-167.netlify.app/" target={'_blank'} className='flex flex-col justify-center items-center py-2 overflow-hidden'>
                <img src={ecommerce} className="image-project hover:animate-pulse" alt="ecommerce project" />
              </a>
            </div>
            <p className='m-3'>Un ecommerce web con distinas secciones de productos, joyería, tecnología, ropa y carrito de compras.</p>
            <p className='pl-3'>En lo que es el desarrollo se usó <span className='text-slate-700 uppercase font-semibold'>react-router-dom</span> para manejar las distinas rutas que tendrá el ecommerce. Se implementó <span className='uppercase text-slate-700 font-semibold'>Redux</span> para manejar las acciones y el estado de la web app. En la creación del formulario se usó de librería formik, y las llamadas a la API, con implementación de axios, para el manejo de estilos se usó <span className='uppercase text-indigo-600 font-semibold'>Bootstrap</span> para simplificar el desarrollo.
            </p>
            <div className='flex flex-row gap-3 pl-3 my-5 font-bold'>
              <span>React</span>
              <span>Bootstrap</span>
              <span>Fake store API</span>
            </div>
          </article>
          <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 dark:border-gray-500 m-3 sm:mx-20 md:mx-20 lg:w-2/4'>
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold mb-4'>Proet cursos</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/course-react" target={'_blank'}>
                  <FiGithub></FiGithub>
                </a>
                <a href="https://proet-e6dfc9.netlify.app/" target={"_blank"}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
              </div>
            </div>
            <div>
              <a href="https://proet-e6dfc9.netlify.app/" target={"_blank"} className='flex flex-col justify-center items-center py-2 overflow-hidden'>
                <img src={proet} className="image-project hover:animate-pulse" alt="rick and morty project" />
              </a>
            </div>
            <p className='m-3'><span className='text-gray-500 uppercase font-semibold'>Proet</span> aplicación de cursos para suscribirte a los distintos cursos.
              Sección de compras con tarjeta de credito validaciones de email y envios del mismo al finalizar la compra.
            </p>
            <div className='flex flex-row gap-3 pl-3 my-5 font-bold flex-wrap'>
              <span>React</span>
              <span>Email JS</span>
              <span>Abstract API</span>
            </div>
          </article>
          <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 dark:border-gray-500 m-3 sm:mx-20 md:mx-20 lg:w-2/4'>
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold mb-4'>Chat</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/chat-react" target={'_blank'}>
                  <FiGithub></FiGithub>
                </a>
                <a href="https://golden-pithivier-8c6fd5.netlify.app/" target={"_blank"}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
              </div>
            </div>
            <div>
              <a href="https://golden-pithivier-8c6fd5.netlify.app/" target={"_blank"} className='flex flex-col justify-center items-center py-2 overflow-hidden'>
                <img src={chat} className="image-project hover:animate-pulse" alt="dashboard project" />
              </a>
            </div>
            <p className='m-3'>Este proyecto consiste en un chat en tiempo real construido con React en el frontend y Node.js en el backend. El objetivo es mostrar cómo se puede crear una aplicación de chat funcional utilizando estas tecnologías.
            </p>
            <p className='pl-3'>Backend hecho en <span className='uppercase text-sky-500 font-semibold'>Express - Mongodb</span>.
            </p>
            <div className='flex flex-row gap-3 pl-3 my-5 font-bold flex-wrap'>
              <span>React</span>
              <span>Tailwind</span>
              <span>Nodejs</span>
              <span>Mongodb</span>
            </div>
          </article>  
          <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 dark:border-gray-500 m-3 md:mx-20 sm:mx-20 lg:w-2/4'>
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold mb-4'>Giphy-app</span>
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
              <a href="https://giphy-645.netlify.app/" target={"_blank"} className='flex flex-col justify-center items-center py-2 overflow-hidden'>
                <img src={gif} className="image-project hover:animate-pulse" alt="gif project" />
              </a>
            </div>
            <p className='m-3'>Un clon de uno de los buscadores de gifs mas populares.</p>
            <p className='pl-3'>En lo que es el desarrollo para las llamadas a la API se usó <span className='uppercase text-slate-600 font-semibold'>axios,</span> y para el manejo de estilos se usó <span className='uppercase text-sky-500 font-semibold'>Tailwind</span>.
            </p>
            <div className='flex flex-row gap-3 pl-3 my-5 font-bold'>
              <span>React</span>
              <span>Tailwind</span>
              <span>Giphy API</span>
            </div>
          </article>  
          <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 dark:border-gray-500 m-3 md:mx-20 sm:mx-20 lg:w-2/4'>
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold mb-4'>Kanban-app</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/kanban-app" target={"_blank"}>
                  <FiGithub></FiGithub>
                </a>
                <a href="https://kanban-645.netlify.app" target={"_blank"}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
              </div>
            </div>
            <div>
              <a href="https://kanban-645.netlify.app" target={"_blank"} className='flex flex-col justify-center items-center py-2 overflow-hidden'>
                <img src={kanban} className="image-project hover:animate-pulse" alt="kanban project" />
              </a>
            </div>
            <p className='m-3'>Web app de tareas, el proyecto surgió como desafio de <span className='text-gray-500 font-semibold uppercase'>front-end mentor</span>.</p>
            <p className='pl-3'>En lo que es el desarrollo para el manejo de estilos se usó <span className='uppercase text-sky-500 font-semibold'>MUI</span>.
            </p>
            <div className='flex flex-row gap-3 pl-3 my-5 font-bold'>
              <span>React</span>
              <span>MUI</span>
            </div>
          </article>
          <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 dark:border-gray-500 m-3 sm:mx-20 md:mx-20 lg:w-2/4'>
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold mb-4'>Rick and Morty API</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/rick-and-morty-react" target={'_blank'}>
                  <FiGithub></FiGithub>
                </a>
                <a href="https://magenta-hummingbird-5754c9.netlify.app/" target={"_blank"}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
              </div>
            </div>
            <div>
              <a href="https://magenta-hummingbird-5754c9.netlify.app/" target={"_blank"} className='flex flex-col justify-center items-center py-2 overflow-hidden'>
                <img src={rick} className="image-project hover:animate-pulse" alt="rick and morty project" />
              </a>
            </div>
            <p className='m-3'>Web app para ver los personajes de <span className='text-gray-500 uppercase font-semibold'>Rick and Morty</span> ,episodios y fechas de  estreno, para las llamadas a la API se hizo usó de <span className='text-gray-500 font-semibold uppercase'>AXIOS</span>.</p>
            <p className='pl-3'>para el manejo de estilos sé usó <span className='uppercase text-sky-500 font-semibold'>Tailwind</span>.
            </p>
            <div className='flex flex-row gap-3 pl-3 my-5 font-bold flex-wrap'>
              <span>React</span>
              <span>Tailwind</span>
              <span>Rick and Morty API</span>
            </div>
          </article>
          <article className='shadow-lg p-3 text-gray-500 rounded-md border-2 border-gray-200 dark:border-gray-500 m-3 sm:mx-20 md:mx-20 lg:w-2/4'>
            <div className='flex flex-row justify-between'>
              <span className='uppercase text-left pl-3 text-gray-500 font-semibold mb-4'>Dashboard</span>
              <div className='flex flex-row gap-2 text-xl cursor-pointer'>
                <a href="https://github.com/iarmolla/dashboard-react" target={'_blank'}>
                  <FiGithub></FiGithub>
                </a>
                <a href="https://chimerical-mandazi-47f4f8.netlify.app/login" target={"_blank"}>
                  <BiLinkExternal></BiLinkExternal>
                </a>
              </div>
            </div>
            <div>
              <a href="https://chimerical-mandazi-47f4f8.netlify.app/login" target={"_blank"} className='flex flex-col justify-center items-center py-2 overflow-hidden'>
                <img src={dashboard} className="image-project hover:animate-pulse" alt="dashboard project" />
              </a>
            </div>
            <p className='m-3'>Panel de administración: El objetivo es obtener, un control organizado de los empleados, que estén registrados. El panel ofrece gráficos del sueldo que recibe el empleado para tener una mejor visualización del mismo, y poder tomar decisiones con lo anterior.
            </p>
            <p className='pl-3'>Backend hecho en <span className='uppercase text-sky-500 font-semibold'>Express - Mysql</span>.
            </p>
            <div className='flex flex-row gap-3 pl-3 my-5 font-bold flex-wrap'>
              <span>React</span>
              <span>Tailwind</span>
              <span>Recharts</span>
              <span>Mysql</span>
              <span>Express</span>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Home
