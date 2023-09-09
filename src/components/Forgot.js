import React from "react";
import { ReactComponent as ReactLogo } from "../images/new-logo.svg";
import {useNavigate} from "react-router-dom";

export default function Forgot(){

    function handleSubmit(e){
        e.preventDefault();
        // const { name, value } = e.target
        // setData({...data, [name]: value})
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
    }

    function navigate() {
        // return()
    }

    return(
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*<img*/}
                    {/*    className="mx-auto h-10 w-auto"*/}
                    {/*    src="../../public/logo.svg"*/}
                    {/*    alt="TecnoMass"*/}
                    {/*/>*/}
                    <div className="flex justify-center align-middle"><ReactLogo></ReactLogo></div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        TecnoMass
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Direccion de Correo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/*<div>*/}
                        {/*    <div className="flex items-center justify-between">*/}
                        {/*        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">*/}
                        {/*            Password*/}
                        {/*        </label>*/}
                        {/*        <div className="text-sm">*/}
                        {/*            <a href="/forgot" className="font-semibold text-indigo-600 hover:text-indigo-500">*/}
                        {/*                Olvidaste tu Contraseña?*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <input*/}
                        {/*            id="password"*/}
                        {/*            name="password"*/}
                        {/*            type="password"*/}
                        {/*            autoComplete="current-password"*/}
                        {/*            required*/}
                        {/*            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div>
                            <button
                                type="submit"
                                onClick={navigate}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>

                    {/*<p className="mt-10 text-center text-sm text-gray-500">*/}
                    {/*    <a href="/forgot" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">*/}
                    {/*        Olvidaste tu Contraseña?*/}
                    {/*    </a>*/}
                    {/*</p>*/}
                </div>
            </div>
        </>
    )
}