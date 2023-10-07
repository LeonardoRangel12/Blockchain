import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Todas las plantillas HTML
import header from "./components/header";
import footer from "./components/footer";
import home from "./components/home";
import user from "./components/user";



const app = async () => {
    $("#header").html(header());
    // ROUTER
    if (window.location.pathname === "/" || window.location.pathname === "/home") {
        $("#content").html(await home());    
    }
    else if(window.location.pathname === "/user"){
        $("#content").html(await user());
    }
    else{
        $("#content").html("<h1>404 Not Found</h1>");
    }
    
    $("#footer").html(footer());
};

// Init app
app();