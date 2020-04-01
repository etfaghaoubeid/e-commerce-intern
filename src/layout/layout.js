import React from "react" ;
import Container from "react-bootstrap/Container";
import Header from "../components/header/header";
const Layout = ({children})=>(
    <>
     <Header/>
    <Container>{children}</Container>
    </>
)
export default Layout;