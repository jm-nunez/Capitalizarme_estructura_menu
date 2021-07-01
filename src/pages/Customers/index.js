import React, { Fragment } from "react"
import Card from "../../components/library/Card"
import Accordion from "../../components/library/Accordion"



const Customers = () => (

            <Fragment> 
            <div class="container px-8 bg-white mx-8">
            <p class="text-3xl text-gray-900">745 Resultados para ti:</p>
            <div className=" flex flex-col items-center ">
            <Card />      
            <div className="vertical-line mb-3"></div>  
            <Accordion/>
            </div>
            </div>
            </Fragment>
)


export default Customers