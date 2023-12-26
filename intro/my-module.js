export default  (name) => {
    console.log("hello " + name);
    console.log(`Hello ${name}`);
}

const topla = (a,b)=> a+b;
const cikar = (a,b)=> a-b;

const text = "Text";
const user = {
    name:"Nursel",
    surname:"Özkan"
};

const users = [
    {
        name:"Nursel",
        surname:"Aşar"
    },
    {
        name:"Osman",
        surname:"Aşar"
    }
];


export { topla, cikar,text, user, users};
