import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"

const SignUpButton = () => (
    <Link to="/signup" className="mr-5 ">
        <BrandButtonDefault
            type="button"
            value="Registrate"
        />
    </Link>)


export default SignUpButton