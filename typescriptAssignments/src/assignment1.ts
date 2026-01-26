// // Convert this JS code into TS
// // Add proper type annotations to the function parameters and return type

// function calculateDiscount(price, discount) {
//     return price - price * discount;
// }


// calculateDiscount(100, "0.1");

function calculateDiscount(price: number, discount:number): number {
    return price - price * discount;
}

let discountPercent = 10;
let originalPrice    = 100

const discountedPrice = calculateDiscount(originalPrice, discountPercent/100);
console.log(`The product of Rs ${originalPrice} after discounting ${discountPercent}% becames Rs ${discountedPrice} `)