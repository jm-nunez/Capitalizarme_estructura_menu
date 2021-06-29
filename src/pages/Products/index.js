import React, { Fragment } from "react"
import Card from "../../components/library/Card"
import Submenu from "../../components/features/submenu_filter"


const Products = () => (
            <Fragment> 
            <Submenu/>
            <div class="container px-8 bg-white mx-8">
            <p class="text-3xl text-gray-900">Resultados para ti:</p>
            <p class="text-gray-700">745 Proyectos </p>
            <div className=" flex flex-col items-center ">
            <Card />      
            <div className="vertical-line mb-3"></div>  
            <p className="text-2xl text-gray-900 px-8">Tal vez te pueda interesar:</p>
            </div>
            </div>
            </Fragment>
)
export default Products