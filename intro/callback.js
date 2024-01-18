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
// (async ()=>{
//     const {data:users} =  await axios("https://jsonplaceholder.typicode.com/users");

//     const {data:post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const {data:post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("User", users);
//     console.log("Post 1", post1);
//     console.log("Post 2", post2);
// })();

//Promise kullanımı

//resolve : işlem başarıyla gerçekleşmiştir data döner
//reject :Kod çalışırken bir problem oluşursa kodu reddeder.
// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     // console.log("comments");
//     // resolve("Comments");
//     // resolve(2);
//     if(number ===1){
//         resolve({text:"selam"});
//     }
//     reject("Bir problem oluştu");
//   });
// };

// getComments(1) //1 gönderildiğinde resolve, 1 dışında parametre gönderildiğinde reject olacak.
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUser = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    // reject("Bir sorun oluştu");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
    // reject("Bir sorun daha oluştu.");
  });
};

//Tek başlarına asenkron oldukları ve birbirine bağlı olmadıkları için farklı sıralarda gelebiliyorlar.
// getUser(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// getPost(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//Anonim Fonksiyon kullanarak async-await ifadeleri ile belirlenen sırada gelmesi sağlandı.
// (async () => {
//   await getUser(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

//   await getPost(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// })();

// (async () => {
//   try {
//     const users = await getUser(1);
//     const post = await getPost(1);

//     console.log(users);
//     console.log(post);
//   } catch (e) {
//     console.log(e);
//   }
// })();


//Birden fazla sıralı çalıştırılmak istenen Promise dizisi olduğunda kullanılır.
Promise.all([getUser(), getPost(1)])
  .then(console.log)
  .catch(console.log);
