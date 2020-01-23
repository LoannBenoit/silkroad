import BaseController from '../kernel/BaseController.js'

/**
 * DO NOT IMPORT ANY MODULE HERE, CONTROLLERS ARE NOT TYPED MODULE 
 * 
 * Lambda text/javascript script
 * controllers need to be hard coded within a script tag
 * 
 * No need to define a window.onload if controller is defined in window file.
 */

class HomeController extends BaseController{

    title = 'SILKROAD'

    constructor() {
        super()
    }

    load() {
        
    }

    render() {    
        this.setTemplate('/templates/home.html',{
            title: this.title
        })
        .setRoot('content')
        .apply()        
    }

}

export default HomeController