//Promise resolve
const sukses = new Promise((resolve) => {
    resolve("Berhasil");
})

console.log(sukses);

//Promise reject
const gagal = new Promise ((reject) => {
    reject("Gagal");
})

console.log(gagal);

//Promise resolve and reject
const nilai = true;

const promise = new Promise((resolve, reject) => {
    if (nilai) {
        resolve("Berhasil hore");
    } else {
        reject("Arrgghh sial")
    }
})

console.log(promise);



