// Set the Regular expression to extract numbers only
var re = /[0-9]+/;
// get the first number
var first_match = re.exec(msg.payload)[0];
// slice the message so we can search for the second number
let startSearchFrom = msg.payload.indexOf(first_match);
let result = msg.payload.slice(startSearchFrom + first_match.length);

// get the second number
var second_match = re.exec(result)[0];

// start the division function : 
let numerator = parseInt(first_match);
let denominator = parseInt(second_match);

try {
    if (numerator / denominator) {
        result = numerator / denominator;
    }
}
catch {
    result = false;
}
msg.payload = result
return msg;

