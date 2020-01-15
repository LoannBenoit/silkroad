import { catalogs } from '../js/autoload.js'
import ORM from './Orm.js'

class Renderer extends ORM{
    
    templatePromise
    referenceID

    constructor() {        
        super(catalogs)
    }

    getSnippet(templatePath, data) {
        return this.loadTemplateXhr(templatePath,data)
    }

    setTemplate(templatePath, data) {
        this.templatePromise = this.loadTemplateXhr(templatePath,data)
        
        return this
    }
    
    setRoot(referenceID) {
        this.referenceID = referenceID
        return this
    }

    apply() {
        this.templatePromise.then((template) => {   
            let ref = this.referenceID
            let content = document.getElementById(ref)            
            content.innerHTML = template
        })
    }

}

export default Renderer