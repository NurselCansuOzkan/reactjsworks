//Parametre olarak verilen süre kadar sonra çalışır 
// setTimeout(()=>{
//     console.log("Merhaba");
// },2000);

//Parametre olarak verilen süre aralıklarla durdurulana kadar çalışır
// setInterval(()=>{
//     console.log("Merhaba ben her saniye çalışacağım");
// },1000);

//Parametre olarak fonksiyon verildi
// const sayHi = (cb) => {
//     cb();
// }

// sayHi(()=>{
//     console.log("Hello");
// });

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) =>data.json())
// .then((users)=>{
//     console.log("Users yüklendi! " , users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data)=>data.json())
//     .then((post)=>{
//         console.log("Post 1 yüklendi " , post);
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data)=>data.json())
//         .then((post) => console.log("Post 2 yüklendi" , post))
//     })
// })
//end

//Yukarıdaki kod ile aynı işi yapıyor fakat aşağıdaki kod daha okunabilir async await kullanımı ile
// async function getData(){
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json()

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json()

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json()

//     console.log("User", users);
//     console.log("Post 1", post1);
//     console.log("Post 2", post2);
// }

// getData();
//end

//Fonksiyon adı kullanmamak için anonim fonksiyon oluşturulabilir.
// (()=>{
//     console.log("Anonim fonksiyon çağırmadan çalışır");
// })()
//end

//async-await kullanımı (fetch kullanarak)
// (async ()=>{
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json()

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json()

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json()

//     console.log("User", users);
//     console.log("Post 1", post1);
//     console.log("Post 2", post2);
// })();

//async-await kullanımı (axios kullanarak)
import axios from "axios";
(async ()=>{
    const {data:users} =  await axios("https://jsonplaceholder.typicode.com/users");

    const {data:post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

    const {data:post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log("User", users);
    console.log("Post 1", post1);
    console.log("Post 2", post2);
})();