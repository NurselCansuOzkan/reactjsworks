console.log("Hello Node");

var slugify = require('slugify')
const title = slugify('some string') // some-string
const title2 = slugify('some string', '_')  // some_string

console.log(title);
console.log(title2);