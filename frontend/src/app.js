import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/app.css";
import $ from "jquery";

import header from "./components/header";
import footer from "./components/footer";
<<<<<<< HEAD
import { connect } from "./components/connect";
import login from "./components/login";
import signup from "./components/signup";
import landingPage from "./components/landingPage";
import gamePage from "./components/gamePage";
import main from "./components/main";
import searchPage from "./components/searchPage";
import upload from "./components/upload";
=======
import user from "./components/user";
import {connect} from "./components/connect";


>>>>>>> parent of 7806592... Crea NFT
const app = async () => {
  if (window.location.pathname === "/") {
    $("#content").html(await landingPage());
  } else {
    $("#header").html(header());
<<<<<<< HEAD

    if (window.location.pathname === "/transferir") {
      $("#content").html(await connect());
    } else if (window.location.pathname === "/main") {
      $("#content").html(await main());
    } else if (window.location.pathname === "/gamePage") {
      $("#content").html(await gamePage());
    } else if (window.location.pathname === "/signup") {
      $("#content").html(await signup());
    } else if (window.location.pathname === "/login") {
      $("#content").html(await login());
    } else if (window.location.pathname === "/searchPage") {
      $("#content").html(await searchPage());
    } else if (window.location.pathname === "/upload") {
      $("#content").html(await upload());
    } else {
      $("#content").html("404 Not Found");
=======
    if (window.location.pathname === "/") {
        $("#content").html(await user());    
    }
    else if (window.location.pathname === "/transferir" ) {
        $("#content").html(await connect());
    }
    else if (window.location.pathname === "/Landing" ) {
        $("#content").html(await landing());
    }
    else if (window.location.pathname === "/subir" ) {
        $("#content").html(await subir());
    }
    else{
        $("#content").html("404 Not Found");
>>>>>>> parent of 7806592... Crea NFT
    }
    $("#footer").html(await footer());
  }
};

// Init app
app();
