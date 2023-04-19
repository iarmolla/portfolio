import React, { useEffect, useState } from 'react';
import '../styles/modal.css';
import { Formik } from 'formik'
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal({ show, handleClose }) {
    const [state, submit] = useForm('mdovnqgv')
    const [modal, setModal] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        setModal(show)
    }, [show])
    const notify = () => toast("¡Enviado con exito!", {
        theme: darkMode ? 'dark' : 'light',
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        if (mq.matches) {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
        const handleChange = () => {
            if (mq.matches) {
                setDarkMode(true)
            } else {
                setDarkMode(false)
            }
        }
        mq.addListener(handleChange)
        return () => {
            mq.removeListener(handleChange)
        }
    }, [window.matchMedia])
    return (
        <div>
            {modal ? <>
                <div className="modal-background">
                    <ToastContainer />
                    <div className="modal-container bg-slate-50 border-2 border-gray-200 dark:bg-zinc-900 dark:border-0">
                        <div className="modal-header">
                            <button className="modal-close" onClick={() => {
                                handleClose()
                            }}>
                                X
                            </button>
                        </div>
                        <div className="modal-body">
                            <section className="five" id="contact">
                                <div className="mx-auto max-w-screen-md">
                                    <h2 className="mb-4 text-4xl tracking-tight text-zinc-400 text-center mt-6">Envíame un mensaje!</h2>
                                    <p className=" font-light mb-2 text-center text-gray-500 dark:text-gray-400 sm:text-xl">Si tienes alguna pregunta o quieres contactarme puedes usar el formulario</p>
                                    <Formik
                                        initialValues={{ name: '', email: '', message: '' }}
                                        validate={(values) => {
                                            let errors = {}
                                            if (!values.message) {
                                                errors.message = "* Mensaje requerido *"
                                            }
                                            if (!values.name) {
                                                errors.name = "* El nombre no puede estar vacio *"
                                            }
                                            if (!values.email) {
                                                errors.email = '* El correo electrónico no puede estar vacío *';
                                            } else if (
                                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                            ) {
                                                errors.email = '* Direccion invalida revise su direccion *';
                                            }
                                            return errors
                                        }}
                                        onSubmit={(values, { resetForm }) => {
                                            submit(values)
                                            notify()
                                            resetForm()
                                            setTimeout(() => {
                                                handleClose()
                                            },1000)
                                        }}
                                    >
                                        {({ handleSubmit,
                                            errors,
                                            values,
                                            touched,
                                            handleChange,
                                            handleBlur
                                        }) => (
                                            <form className="space-y-8  mx-1" onSubmit={handleSubmit}>
                                                <div>
                                                    <label htmlFor="name" className="block mb-2 text-sm  text-gray-400" >Nombre</label>
                                                    <input type="text" id="name" onBlur={handleBlur} value={values.name} onChange={handleChange} className={`block p-3 w-full text-sm  bg-gray-50 dark:bg-zinc-900 dark:text-gray-400 rounded-lg shadow-sm outline-none border`} placeholder="Ingrese su nombre" name="name" required />
                                                    <label className={`${touched.name && errors.name ? 'error-text  text-sm font-semibold text-red-400' : 'hidden'}`}>{touched.name && errors.name}</label>
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className={`block mb-2 text-sm  text-gray-400`}>Email</label>
                                                    <input type="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={`shadow-sm bg-gray-50 dark:bg-zinc-900  text-gray-900 dark:text-gray-400 text-sm rounded-lg outline-none block w-full p-2.5 border border-gray-300`} placeholder="nombre@gmail.com" required name="email" />
                                                    <label className={`${touched.email && errors.email ? 'error-text  text-sm font-semibold text-red-400' : 'hidden'}`}>{touched.email && errors.email}</label>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label htmlFor="message" className="block mb-2 text-sm  text-gray-400" >Mensage</label>
                                                    <textarea id="message" rows="6" onChange={handleChange} onBlur={handleBlur} value={values.message} className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:text-gray-400 dark:bg-zinc-900 rounded-lg shadow-sm outline-none border border-gray-300 `} placeholder="Tu mensaje" required name="message"></textarea>
                                                    <label className={`${touched.message && errors.message ? 'error-text  text-sm font-semibold text-red-400' : 'hidden'}`}>{touched.message && errors.message}</label>
                                                </div>
                                                {
                                                    !errors.name && !errors.email && !errors.message &&
                                                    <div className='flex justify-center'>
                                                        <button type="submit" disabled={state.submitting} className={`${!errors.name && !errors.email && !errors.message ? 'submit' : 'hidden'} py-1 px-24 text-lg font-medium text-center rounded-md outline-none bg-gray-200 text-gray-400 transition-all hover:transition-all hover:bg-gray-300 hover:opacity-5  dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700`}>Enviar</button>
                                                    </div>
                                                }
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </> : <></>
            }
        </div>
    );
}

export default Modal;
