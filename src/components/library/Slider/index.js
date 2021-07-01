import React from "react"


export const Slider = () => (
<div classNameName="flex flex-col items-center">

  <div className="flex flex-col items-center">
    <div className="swiper flex overflow-x-scroll w-1/2">
      <img className="w-full h-1/2 object-cover bg-gray-300" src="https://images.unsplash.com/photo-1582148453014-b7d4117d3300?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" id="slide1">
      <img className="w-full h-1/2 object-cover bg-gray-300" src="https://images.unsplash.com/photo-1582224119362-9df4eead238a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1334&amp;q=80" id="slide2">
      <img className="w-full h-1/2 object-cover bg-gray-300" src="https://images.unsplash.com/photo-1582229822017-3b77911e82bb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80" id="slide3">
    </div>
  </div>

  <div className="flex mt-4">
    <a href="#slide1" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
    <a href="#slide2" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
    <a href="#slide3" className="w-4 h-4 mx-1 bg-gray-400 rounded-full"></a>
  </div>

  </div>
  </div>)