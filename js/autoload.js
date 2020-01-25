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
import catalog4 from "./catalog4.js";
import catalog from "./catalog.js";

const catalogs =  {
    'catalog_1': catalog1,
    'catalog_2': catalog2,
    'catalog_4': catalog4,
    'catalog': catalog
}

Window.ORMClient = new ORM(catalogs);