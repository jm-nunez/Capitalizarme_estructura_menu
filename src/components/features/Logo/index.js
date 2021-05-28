import React from "react"
import { Link } from "react-router-dom"
import { HOME } from "../../../constants/routes"

const Logo = () => (
    <Link to={HOME.link} className="font-bold text-white text-2xl ">
        <span className="flex flex-col bg-brand h-10 rounded-full justify-center items-center text-center cursor-pointer
        ">
            <img _ngcontent-cptz-web-c64="" src="https://www.capitalizarme.com/assets/images/logoWhite.png" alt="logo" class="no-border pointer" tabindex="0"></img>
        </span>
    </Link>)

export default Logo