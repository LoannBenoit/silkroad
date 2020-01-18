/**
 * Modules loadings
 * 
 * autload file only importe all needed modules, 
 * the business code is placed in controllers
 * 
 * this file also calls the ORM constructor with 
 * available catalogs
 */


import HightTechController from './HightTechController.js'
import FruitController from './FruitController.js'
import VaisseauController from './VaisseauController.js'
import HomeController from './HomeController.js'

import catalog1 from './catalog1.js'
import catalog2 from './catalog2.js'
import catalog3 from './catalog3.js'

import App from '../kernel/App.js'

const catalogs =  {
    'catalog_1': catalog1,
    'catalog_2': catalog2,
    'catalog_3': catalog3,
    'all': [...catalog1,...catalog2,...catalog3]
}

const routes = {
    '/' : HomeController,
    '/high-tech' : HightTechController,
    '/fruits' : FruitController,
    '/vaisseaux' : VaisseauController
}

Window.App = new App()

export { catalogs, routes }