import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../../../../constants/routes"

const Login = () => (
    <Link
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
        to={ROUTES.LOGIN.link} >
        {ROUTES.LOGIN.name}
    </Link >)

export default Login