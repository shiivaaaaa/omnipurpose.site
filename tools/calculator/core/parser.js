
export function safeEval(expr){
expr = expr
.replace(/π/g, Math.PI)
.replace(/e/g, Math.E)
.replace(/\^/g, "**")
.replace(/×/g, "*")
.replace(/÷/g, "/");

return Function('"use strict"; return (' + expr + ')')();
}
