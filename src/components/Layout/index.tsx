import AboutMe from "../../pages/AboutMe";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Project from "../../pages/Project";
import Content from "../Content";
import Footer from "../Footer";
import { MainHeader } from "../MainHeader";

export default function Layout() {
    return (
        <>
            <MainHeader />
            <Content>
                <Home />
                <AboutMe />
                <Project />
                <Contact />
            </Content>
            <Footer />
        </>
    );
}