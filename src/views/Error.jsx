import React from 'react'
import { Link } from "react-router-dom"
import '../styles/error.css'
import space from '../assets/space.svg'
import cat from '../assets/cat.svg'


function Error() {
    return (
        <div className="container">
            <div className=''>
                <p className="container-error">404</p>
                <div>
                    <img src={space} className="h-60 absolute error-image" alt="" />
                    <img src={cat} className="h-44 absolute error-image--" alt="" />
                </div>
            </div>
            <h2 className="container-title">
                Pagina no encontrada :c
            </h2>
            <p class="container-paragraph">¡Lo siento por eso! Visite la página de inicio para llegar a donde necesita ir.</p>
            <Link to={'/'} className="container-link">Volver!</Link>
        </div>
    )
}

export default Error