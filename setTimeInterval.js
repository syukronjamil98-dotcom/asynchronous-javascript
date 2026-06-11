//callback setInterval: untuk menampilkan sesuatu secara periodik

const setTime = ()=>{
    console.log(new Date().toString());
}

setInterval(setTime, 1000);