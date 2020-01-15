/**
 * Modules loadings
 * 
 * autload file only importe all needed modules, 
 * the business code is placed in controllers
 * 
 * this file also calls the ORM constructor with 
 * available catalogs
 */


import HomeController from './HomeController.js'
import TestController from './TestController.js'

import catalog1 from './catalog1.js'
import catalog2 from './catalog2.js'

import App from '../kernel/App.js'



const catalogs =  {
    'catalog_1': catalog1,
    'catalog_2': catalog2,
    'all': [...catalog1,...catalog2]
}

const routes = {
    '/' : HomeController,
    '/test' : TestController
}

Window.App = new App()

export { catalogs, routes }