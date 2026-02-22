export function loadVector(container){

container.innerHTML = `
<h3>Dot Product</h3>
<input id="v1x"><input id="v1y"><br>
<input id="v2x"><input id="v2y"><br>
<button id="dotBtn">Compute</button>
<div id="vecOut"></div>
`;

dotBtn.onclick = ()=>{
vecOut.innerText =
(v1x.value*v2x.value + v1y.value*v2y.value);
};
}
