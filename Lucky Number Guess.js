function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function luckyGuess(){
  const luckyNumber = 6

  let guess = Math.round(Math.random() * 10) +1;

  while (luckyNumber !== guess){
    console.log(guess);
    guess = Math.round(Math.random() * 10) +1;
    await sleep(1000);
  }
  console.log(luckyNumber)
}

luckyGuess()