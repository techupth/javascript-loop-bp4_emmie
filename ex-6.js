// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";

let reverse = "";
for (let i = companyName.length - 1 ; i >= 0 ; i--) {
    reverse += companyName[i];
};
console.log(reverse);
