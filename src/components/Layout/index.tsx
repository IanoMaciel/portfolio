import Home from "../../pages/Home";
import Content from "../Content";
import Footer from "../Footer";
import { MainHeader } from "../MainHeader";

export default function Layout() {
    return (
        <>
            <MainHeader/>
            <Content>  
                <Home/>
            </Content>
            <Footer/>
        </>
    );
}