
function guguClass(i){
    const gugu = i;
    for (let index = 1; index < 10; index++) {
        console.log(` ${gugu} * ${index} = ${gugu*index}`);
    }
    return this;
}
guguClass(2);
guguClass(3);
guguClass(4);
guguClass(5);
guguClass(6);
guguClass(7);
guguClass(8);
guguClass(9);

for (let i = 0; i < 72; i++) {
    console.log(`${Math.floor(i / 9 + 2) } * ${i % 9 + 1} = ${Math.floor(i / 9 + 2) * Math.floor(i % 9 + 1)}`)
    
}