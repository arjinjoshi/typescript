
// // Fix the following function

// function formatValue(value: string | number) {
//     return value.toUpperCase();
// }

// formatValue("hello");
// formatValue(123);

function formatValue(value: string | number): string|number {
    if(typeof value === "string") return value.toUpperCase();
    return value;
}

const formattedValue1 = formatValue("hello");
console.log(formattedValue1);

const formattedValue2 = formatValue(123);
console.log(formattedValue2);