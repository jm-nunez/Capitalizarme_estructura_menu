import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { FEATURES } from "../../../../../constants/routes"
import Menu from "./Menu"

const FeaturesLink = () => {
    const [visible, setVisible] = useState(false)

    const displayMenu = () => {
        setVisible(true)
    }
    const hideMenu = () => {
        setVisible(false)
    }
    return <div className="block"
        onMouseLeave={hideMenu}>
        <NavLink
            to={FEATURES.link}
            className="text-base xl:mr-6 sm:mr-8 md:mr-8 mr-4 bg-blue-500  hover:boton_capit py-2 px-4 rounded"
            activeClassName="cursor-pointer text-blue-400"
            onMouseOver={displayMenu}
        >
            {FEATURES.name}
        </NavLink>
        <Menu isVisible={visible} />
    </div>
}
export default FeaturesLink