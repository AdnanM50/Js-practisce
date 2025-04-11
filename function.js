
// let person = prompt("Please enter total price" );

// console.log("hello");


// function myFunction(p1, p2) {
//     return p1 * p2;
//   }

//  console.log(myFunction(4,5));


// function addition (a,b,c) {
//     return a+b+c${discountedPrice.toFixed(2)}
// }

// console.log(addition(5,9,13));
// console.log(`addition of a and b is ${3+4}`);

function discount(p) {


    let discountedPrice;

    if (p < 100) {
        
        discountedPrice = p;
        console.log(`No discount applied. Final Price: $${discountedPrice}`);
    }
     else if (p >= 100 && p < 500) {
    
        discountedPrice = p - (p * 0.10);
        console.log(`10% discount applied. Final Price: $${discountedPrice.toFixed(2)}`);
    } 
    else {
     
        discountedPrice = p - (p * 0.20);
        console.log(`20% discount applied. Final Price: $${discountedPrice.toFixed(2)}`);
    }
    // console.log(discountedPrice);


    return discountedPrice;
}



  console.log(discount(1000));
// discount(10)
//   console.log(discountedPrice);






  