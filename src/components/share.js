import Header from "./header.js";
import ShaerMain from "./share-main";
import Footer from "./footer.js";
import '../styles/reset.css';
import '../styles/share.css';
import { Fragment } from "react";

function Share(){
    return <Fragment>
        <Header/>
        <ShaerMain/>
        <Footer/>
    </Fragment>
}

export default Share;