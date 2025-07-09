const HopInterval= setInterval(()=>{
console.log("Hop");
},3000);
clearInterval(hopInterval);//

setTimeout(()=> {
    clearInterval(HopInterval);
},10000);
