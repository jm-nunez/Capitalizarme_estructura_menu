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
    <Link to="/signup" tabIndex="-1">
        <BrandButtonDefault
            type="button"
            value="Create First App"
            classes="xs:py-3 xs:px-4 xs:text-sm
                     sm:py-3 sm:px-4 sm:text-sm
                     w-auto px-8 py-4 mt-8 "
        />
    </Link>)

export default UniqueValueStatement
export {GetStartedButton}