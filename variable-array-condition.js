var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// arrray
var items = ['botttle', 'mug', 'paper', 'pen'];
items.indexOf('logens');  //-1
items.push('envelope');
items.push('watch');
items.pop();

// conditions
if (items.length >= 4) {
    console.log('you have too many staffs on your desk');
}
else if (items.length == 3) {
    console.log('you have three items');
}
else {
    console.log('wow! you have a clean desk ');
}