export function loadEquation(container){

container.innerHTML = `
<h3>Quadratic Solver</h3>
<input id="a"><input id="b"><input id="c">
<button id="solve">Solve</button>
<div id="eqOut"></div>
`;

document.getElementById("solve").onclick = ()=>{
let A=+a.value,B=+b.value,C=+c.value;
let D=B*B-4*A*C;
if(D<0){
eqOut.innerText="Complex roots";
}else{
let r1=(-B+Math.sqrt(D))/(2*A);
let r2=(-B-Math.sqrt(D))/(2*A);
eqOut.innerText="x1="+r1+" x2="+r2;
}
};
}
