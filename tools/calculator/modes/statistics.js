let data=[];

export function loadStatistics(container){

container.innerHTML = `
<input id="dataInput" placeholder="Enter number">
<button id="addData">Add</button>
<button id="meanBtn">Mean</button>
<div id="statOut"></div>
`;

addData.onclick = ()=> data.push(+dataInput.value);

meanBtn.onclick = ()=>{
let mean = data.reduce((a,b)=>a+b,0)/data.length;
statOut.innerText="Mean="+mean;
};
}
