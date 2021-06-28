import React, { Fragment } from "react"
import Card from "../../components/library/Card"
import Submenu from "../../components/features/submenu_filter"


const Products = () => (
    <frameElement>
    <Submenu/>
    <div class="container mx-auto">
            <p class="text-3xl text-gray-900">Resultados para ti:</p>
            <p class="text-gray-700">745 Proyectos </p>
            <div className=" flex flex-col items-center pb-24">
            <Card />

            </div>
            </div>
            </frameElement>
)
export default Products