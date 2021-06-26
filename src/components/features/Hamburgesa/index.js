import React from "react"

const hamburgesa = () => (
    <button
    className="md:hidden lg:hidden xl:hidden ml-6  rounded-lg focus:outline-none focus:shadow-outline">
    <span className="text-lg text-primary"
      ><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="black"/>
      </svg>
      </span>
  </button>
    )

export default hamburgesa