class Router{

    routes = {}

    constructor(routes) {        
        this.routes = routes
        this.init()
    }

    init() {        
        for (const path in this.routes) {                              
            if (this.routes.hasOwnProperty(path)) {
                if (path === window.location.pathname) {                    
                    let controller = new this.routes[path]()
                    controller.load()
                    controller.render()
                    break 
                }
            }
        }        
    }
}

export default Router