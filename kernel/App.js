import Router from './Router.js'
import { routes } from '../js/autoload.js'

class App extends Router {
    constructor() {
        super(routes)
    }
}
export default App