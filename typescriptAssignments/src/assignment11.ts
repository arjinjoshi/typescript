// The function currently assumes that the input value is of "any" type
// Update the function so that the input value is of "unknown" type
// Use type checking to safely call toUpperCase method

function parse(value: unknown) {
    if(typeof value === "string") return value.toUpperCase();
    return value;
}

const parsedStrValue = parse("good evening, gyanas sir!");
console.log(parsedStrValue);

const parsedNumValue = parse(23);
console.log(parsedNumValue);

const parsedBoolValue = parse(true);
console.log(parsedBoolValue);