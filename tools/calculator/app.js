import { loadScientific } from "./modes/scientific.js";
import { loadComplex } from "./modes/complex.js";
import { loadMatrix } from "./modes/matrix.js";
import { loadEquation } from "./modes/equation.js";
import { loadStatistics } from "./modes/statistics.js";
import { loadBase } from "./modes/base.js";
import { loadVector } from "./modes/vector.js";
import { loadTable } from "./modes/table.js";

const container = document.getElementById("modeContainer");
const modeSelect = document.getElementById("modeSelect");

function loadMode(mode){
container.innerHTML="";
switch(mode){
case "scientific": loadScientific(container); break;
case "complex": loadComplex(container); break;
case "matrix": loadMatrix(container); break;
case "equation": loadEquation(container); break;
case "statistics": loadStatistics(container); break;
case "base": loadBase(container); break;
case "vector": loadVector(container); break;
case "table": loadTable(container); break;
}
}

modeSelect.addEventListener("change", e=>{
loadMode(e.target.value);
});

loadMode("scientific");
