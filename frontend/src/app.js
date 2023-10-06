import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import header from "./components/header";
import footer from "./components/footer";
import user from "./components/user";
const app = async () => {
    $("#header").html(header());
    $("#user").html(await user());
    $("#footer").html(footer());
};

// Init app
app();