//If a customer has more than 100 points, they are a 'gold' customer, otherwise,
//they are a 'sliver' customer.

let customerpoints = 100;




if (customerpoints > 200){
    console.log('gold customer');
}  else if (customerpoints >= 70){
   console.log('diamond customer');
}  else {
    console.log('silver customer');
}

//Ternary operator
let customer = customerpoints

let x = 10;
let y = (x > 5) && (x < 15);
console.log(y);


let X = (1 == true);
console.log(X)

let a = 5;
a += 3;
console.log(a);

let c = 10;
let b = c++;
console.log(b)

let f = 1;
let e = f !== 2;
console.log(e)

