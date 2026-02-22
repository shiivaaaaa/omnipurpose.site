let memory = 0;

export function memoryAdd(val){ memory += val; }
export function memorySub(val){ memory -= val; }
export function memoryRecall(){ return memory; }
export function memoryClear(){ memory = 0; }
