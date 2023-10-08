import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/app.css";
import $ from "jquery";

import header from "./components/header";
import footer from "./components/footer";
import user from "./components/user";
import {connect} from "./components/connect";


const app = async () => {
    $("#header").html(header());
    if (window.location.pathname === "/") {
        $("#content").html(await user());    
    }
    else if (window.location.pathname === "/transferir" ) {
        $("#content").html(await connect());
    }
    else{
        $("#content").html("404 Not Found");
    }
    $("#footer").html(footer());
};

// Init app
app();