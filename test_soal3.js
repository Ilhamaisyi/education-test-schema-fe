function hasil1(max) {
  let result = "\n";
  for (let i = 1; i <= max; i++) {
    for (let y = 1; y <= i; y++) {
      result += "*";
    }
    result += "\n";
  }

  return `\nhasil 1 : ${result}`;
}

function hasil2(max) {
  let result = "";
  for (let i = max; i >= 0; i--) {
    for (let y = 0; y <= i; y++) {
      result += " ";
    }

    for (let x = 0; x < max - i; x++) {
      result += "*";
    }

    result += "\n";
  }

  return `\nhasil 2: \n ${result}`;
}

console.log(hasil1(10));
console.log(hasil2(7));
