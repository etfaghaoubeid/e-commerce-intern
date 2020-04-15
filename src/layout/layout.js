import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const Layout = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);
export default Layout;
