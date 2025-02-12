const arr = []
for(let i = 0; i < 10; i++){
    arr.push(i)
}
console.log(arr)


//-----------break and continue concepts--------------
for(let i = 0; i < 6; i++){
    if(i == 5)break;
    console.log(i)
}

for(let i = 0; i < 6; i++){
    if(i == 5)continue;
    console.log(i)
}