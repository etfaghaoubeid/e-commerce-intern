import React from "react";
import {Link  } from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from "../button-container/button-container.component"
import logo from "../../logo.svg"





const Header= ()=>(
  <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
         <ul className="navbar-nav align-items-center"> 
           <li className="nav-item ml-5">
             <Link className="nav-link"  to="/">E-Commerce </Link>
           </li>
         </ul>
    <Link className="ml-auto" to="/cart">
      <ButtonContainer >
        <span className="mr-2"><i className="fa fa-cart-plus"/></span> My cart
        </ButtonContainer >
    </Link>
  </NavWrapper>
 
);
const NavWrapper = styled.nav`
 background:black;
 .nav-link{
   color:#fff;
   font-size:1.3rem;
   text-transform:capitalize;
 }
`
export default Header;

