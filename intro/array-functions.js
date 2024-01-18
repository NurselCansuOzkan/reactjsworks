// const users = ["Nursel", "Cansu", "Osman"];
const users = [
  {
    name: "Nursel",
    age: 32,
  },
  {
    name: "Nursel",
    age: 19,
  },
  {
    name: "Osman",
    age: 20,
  },
];

/* 
push ->arrayin sonuna yeni bir eleman eklemek
map -> array içinde tek tek döner
find ->array içinde verilen koşullarla arama işlemi yapar
filter ->array içinde filtreleme yapar
some ->arrayin içindeki elemanlardan biri verilen koşula uyuyorsa true döner uymuyorsa false döner
every ->arrayin içindeki bütün elemanlar şarta uyuyorsa true, uymuyorsa false döner
includes ->verilen ifadenin array içinde olup olmadığını kontrol eder,varsa true, yoksa false döner

*/

//push
users.push("Özkan");
users.push("Aşar");
console.log(users);

//map
//map kullanmadan array içinde dönmek için kullanılan örnek
// for(let i = 0; i<users.length ; i++){
//     console.log(users[i])
// }

//map ile kullanım
users.map((item) => {
  console.log(item.name);
});

const findIt = users.find((item)=>item.name ==="Nursel" && item.age > 20);
console.log(findIt);

//filter
// const filtered = users.filter(
//   (item) => item.name === "Nursel" && item.age < 20
// );

const filtered = users.filter(
    ({name,age}) => name === "Nursel" && age < 20
  );
console.log(filtered);

//some
const some = users.some((item)=>item.age > 40);
console.log(some);

//every
const every = users.every((item)=>item.age > 20);
console.log(every);

//includes
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("elma"); //true
// const isIncluded = meyveler.includes("portakal"); //false
console.log(isIncluded);
