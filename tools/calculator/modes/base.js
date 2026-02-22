export function loadBase(container){

container.innerHTML = `
<input id="baseInput" placeholder="Number">
<button id="toBin">BIN</button>
<button id="toHex">HEX</button>
<div id="baseOut"></div>
`;

toBin.onclick = ()=>{
baseOut.innerText = parseInt(baseInput.value).toString(2);
};

toHex.onclick = ()=>{
baseOut.innerText = parseInt(baseInput.value).toString(16);
};
}
