let myNumber = 16
let binary = ""

while (myNumber > 0){
  if ((myNumber % 2) == 0){
    binary = "0" + binary;
      } else {
    binary = "1" + binary;
  }
  myNumber = Math.floor(myNumber/2);
}

console.log(binary)