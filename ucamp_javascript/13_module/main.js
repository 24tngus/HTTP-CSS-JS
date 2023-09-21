/* import {Person as p ,aaa} from './b.js';
 import { default as kk} from './c.js';
 import defaultExport from './c.js';
 */
 import {Person,aaa} from './b.js';
 import bbb from './c.js';
 
   var p = new Person("aa");
   aaa();
   bbb();
  console.log(">>>",p.name);