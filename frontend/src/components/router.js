import $ from "jquery";


class Router{
    constructor(paths){
        this.paths = paths;
        this.initRouter();
    }

    initRouter(){
        const {location : {pathname = "/"}} = window;
        const URL = pathname === "/" ? pathname : pathname.replace("/",this.load(URL));	
    }

    load(page = "home"){
        const {paths} = this;
        const {path, template} = paths[page] || paths.error;
        const $CONTAINER =  $("#content");
        $CONTAINER.html(template);
        window.history.pushState({}, "done", path);
    }
}

export default Router;