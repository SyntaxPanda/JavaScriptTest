function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function duckGoose(){
  let rnd_number = Math.round(Math.random() * 10);
  while (rnd_number !== 3){
    console.log("Duck");
    rnd_number = Math.round(Math.random() * 10)
    await sleep(1000);
  }
  console.log("Goose!")
}

duckGoose()