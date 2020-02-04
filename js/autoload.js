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

import catalog_highTech from "./catalog_highTech.js";
import catalog_fruit from "./catalog_fruit.js";
import catalog_space from "./catalog_space.js";
import catalogTest from "./catalog.js";

const catalogs =  {
    'catalog_highTech': catalog_highTech,
    'catalog_fruit': catalog_fruit,
    'catalog_space': catalog_space,
    'catalogTest': catalogTest,
    'all': [...catalogTest, ...catalog_fruit, ...catalog_highTech, ...catalog_space]
}

Window.ORMClient = new ORM(catalogs);