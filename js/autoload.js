/**
 * Modules loadings
 * 
 * autload file only importe all needed modules, 
 * the business code is placed in controllers
 * 
 * this file also calls the ORM constructor with 
 * available catalogs
 */

import ORM from "./orm.js";

import catalog1 from "./catalog1.js";
import catalog2 from "./catalog2.js";

const catalogs =  {
    'catalog_1': catalog1,
    'catalog_2': catalog2
}

Window.ORMClient = new ORM(catalogs);