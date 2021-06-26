import React, { Fragment } from "react"
import Logo from "../../components/features/Logo"
//import SignUpButton from "../../components/features/Signup"
//import SearchField from "../../components/features/Search"
import Navigation from "../../components/features/Navigation"
import { LoginLink } from "../../components/features/Login"

const Header = () => (
    <Fragment>
        <header className="xs:px-2 sm:py-2
                           sm:px-6 sm:py-3
                           md:px-8 sm:py-4
                           flex justify-start bg-brand-dark py-4 px-10 items-center ">
            <Logo />
            
            <div className="flex flex-grow items-center ">
                <div className="xs:hidden sm:hidden md:hidden ml-20">
                <Navigation/>
                </div>
            <div className="flex  items-center ml-auto">
                <LoginLink />
            </div>
            <div className="hamburgesa">
           
          <button
            class="md:hidden lg:hidden xl:hidden ml-6  rounded-lg focus:outline-none focus:shadow-outline">
            <span class="text-lg text-primary"
              ><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="black"/>
              </svg>
              </span>
          </button>
           </div>
            </div>
        </header>
    </Fragment>)

export default Header