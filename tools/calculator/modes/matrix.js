export function loadMatrix(container){

container.innerHTML = `
<h3>2x2 Determinant</h3>
<input id="a11"><input id="a12"><br>
<input id="a21"><input id="a22"><br>
<button id="det">Compute</button>
<div id="detOut"></div>
`;

document.getElementById("det").onclick = ()=>{
let det =
a11.value*a22.value - a12.value*a21.value;
detOut.innerText = det;
};
}
