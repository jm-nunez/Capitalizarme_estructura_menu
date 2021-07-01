import React from "react"

const Card = () => (
                <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">

                <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                    <img className="w-full" src="https://fundacioncompartir.org/sites/default/files/styles/slick_600x320/public/estos-son-algunos-de-los-edificios-construidos-en-madera.jpg?itok=j40LH1qu" alt="" />
                    
                <div className="badge absolute top-0 left-0 bg-green-500 m-1 text-white p-1 px-2 text-xs rounded-r-lg font-bold">10:53</div>
                <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                    <span className="mr-1 p-1 px-2 font-bold">105 views</span>
                    <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">105 Likes</span>
                    <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">105 Dislikes</span>
                </div>
                <div className="p-4">
                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Detached house • 5y old</p>
                        <p className="text-3xl text-gray-900">$750,000</p>
                        <p className="text-gray-700">742 Evergreen Terrace</p>
                </div>
                <div className="p-4">
                <div className="flex p-4 border-t border-gray-300 text-gray-700">
                        <div className="flex-1 inline-flex items-center">
                            <p> 32 -80 m2 útiles | 1 - 2 - 3 doms.</p>                        
                            </div>                        
                    </div>

                    <div className="flex p-4 border-t border-gray-300 text-gray-700 bg-gray-400">
                        <div className="flex-1 inline-flex items-center">
                            <p>Disponibles </p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                            <p><span className="text-gray-900 font-bold"> 85</span></p>
                        </div>
                    </div>
                    <div className="flex p-4 border-t border-gray-300 text-gray-700 ">
                        <div className="flex-1 inline-flex items-center">
                            <p>Reservados </p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                            <p><span className="text-gray-900 font-bold"> 85</span></p>
                        </div>
                    </div>
                    <div className="flex p-4 border-t border-gray-300 text-gray-700 bg-gray-400">
                        <div className="flex-1 inline-flex items-center">
                            <p>Valor Reserva  </p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                            <p><span className="text-gray-900 font-bold"> $150.000</span></p>
                        </div>
                    </div>
                    <div className="flex p-4 border-t border-gray-300 text-gray-700 ">
                        <div className="flex-1 inline-flex items-center">
                            <p>Entrega </p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                            <p><span className="text-gray-900 font-bold"> Segundo semestre</span></p>
                        </div>
                    </div>
                    <div className="flex p-4 border-t border-gray-300 text-gray-700 justify-center ">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    ver proyecto
                    </button>
                </div>
                </div>
                </div>
                </div>
                <div className="flex p-4 border-t border-gray-300 text-gray-700 justify-center ">
                    <button class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                    ver más proyectos
                    </button>
                </div>

            </div>
    )

export default Card