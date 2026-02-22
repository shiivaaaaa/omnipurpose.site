export function loadComplex(container){

container.innerHTML = `
<input id="real1" placeholder="Real 1">
<input id="imag1" placeholder="Imag 1">
+
<input id="real2" placeholder="Real 2">
<input id="imag2" placeholder="Imag 2">
<button id="addC">Add</button>
<div id="compOut"></div>
`;

document.getElementById("addC").onclick = ()=>{
let r1=+real1.value;
let i1=+imag1.value;
let r2=+real2.value;
let i2=+imag2.value;
document.getElementById("compOut").innerText =
(r1+r2)+" + "+(i1+i2)+"i";
};
}
