import { safeEval } from "../core/parser.js";

export function loadScientific(container){

container.innerHTML = `
<input id="sciInput" placeholder="Expression">
<button id="calcBtn">=</button>
<div id="result"></div>
`;

document.getElementById("calcBtn").onclick = ()=>{
let expr = document.getElementById("sciInput").value;
let result = safeEval(expr);
document.getElementById("result").innerText = result;
};
}
