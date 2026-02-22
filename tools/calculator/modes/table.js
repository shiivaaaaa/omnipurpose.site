import { safeEval } from "../core/parser.js";

export function loadTable(container){

container.innerHTML = `
<input id="expr" placeholder="e.g. x^2">
<input id="start" placeholder="Start">
<input id="end" placeholder="End">
<button id="gen">Generate</button>
<div id="tableOut"></div>
`;

gen.onclick = ()=>{
let e = expr.value;
let s = +start.value;
let en = +end.value;
let output="";
for(let x=s; x<=en; x++){
let val = safeEval(e.replace(/x/g,x));
output += "x="+x+" => "+val+"<br>";
}
tableOut.innerHTML = output;
};
}
