import React from "react";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";
import HomeNav from "../Components/HomeNav";


function Root(){
    return(
    <Container id="homecontainer">
        <HomeNav />
        <Outlet />
    </Container>
    )
}

export default Root;