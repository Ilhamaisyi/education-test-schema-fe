var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

function validasiTeks(string) {
  const splittedString = string.split("");
  const hasNumbers = splittedString.filter((str) => parseInt(str));

  const joinNumber = hasNumbers.join("");

  if (hasNumbers.length > 0)
    return `Sistem kami menolak untuk inputan berisi angka ${joinNumber}`;

  return `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${string}`;
}

console.log(validasiTeks(input1));
console.log(validasiTeks(input2));
