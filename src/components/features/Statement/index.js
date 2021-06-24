import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"

const UniqueValueStatement = () => (
    <p className="xs:text-2xl 
                  sm:text-4xl
                  md:text-5xl
                  font-helvetica font-bold text-6xl text-center text-brand-dark leading-snug">
        Esta es nuestra
        <span className="text-brand"> Pagina </span>
        <br />
        de Inicio
    </p>
)
const GetStartedButton = () => (
    
    <Link to="/login" tabIndex="-1">
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow"></div>
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                INGRESA
              </a>
            </div>
    </Link>)


export default UniqueValueStatement
export {GetStartedButton}