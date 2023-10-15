import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/app.css";
import $ from "jquery";

import header from "./components/header";
import footer from "./components/footer";
import connect from "./components/connect";
import login from "./components/login";
import signup from "./components/signup";
import landingPage from "./components/landingPage";
import gamePage from "./components/gamePage";
import main from "./components/main";
import searchPage from "./components/searchPage";
import upload from "./components/upload";
const path = window.location.pathname;

const app = async () => {
  if (path === "/") {
    $("#content").html(await landingPage());
  } else {
    $("#header").html(header());

    if (path === "/transferir") {
      $("#content").html(await connect());
    } else if ((path === "/main") | (path === "/home")) {
      $("#content").html(await main());
    } else if (path === "/gamePage") {
      $("#content").html(await gamePage());
    } else if (path === "/signup") {
      $("#content").html(await signup());
    } else if (path === "/login") {
      $("#content").html(await login());
    } else if (path === "/searchPage") {
      $("#content").html(await searchPage());
    } else if (path === "/upload") {
      $("#content").html(await upload());
    }
    else {
      $("#content").html("404 Not Found");
    }
    $("#footer").html(await footer());
  }
};

// Init app
app();
