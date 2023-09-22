/* import {Person as p ,aaa} from './b.js';
 import { default as kk} from './c.js';
 import defaultExport from './c.js';
 */
 import {Person,aaa as hello} from './b.js';
 import * as b from './b.js'
 import world from './c.js';
 import { MAX_VALUE } from './c.js';
 
   var p = new Person("aa");
   b.aaa();
   hello();
   world(); /* 1개 밖에 없고 export default라서 이름 달라도 사용 가능 */
  console.log(">>>",p.name);