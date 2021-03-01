// console.log("Working")

const headings = document.getElementsByTagName('h1');

const toper = document.getElementById("top");



setInterval(()=>{
    toper.innerHTML = new String(new Date())
}, 100)

console.log(toper);

