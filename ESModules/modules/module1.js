import { myMod2 } from "./module2.js";

function mymod1() {
  console.log("Module 1");
  myMod2();
}

export default mymod1;
