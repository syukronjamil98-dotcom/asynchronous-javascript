// Callback setTimeout: untuk menampilkan sesuatu hanya dalam satu waktu saja
console.log("Start");

const setWaktu = () => {
    console.log("This is asynchronous setTimeout");
}

setTimeout(setWaktu, 2000);

console.log("End");
