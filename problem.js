var works = ['unlock the module', 'practice while watching video', 'take notes', 'practice the module again', 'join support session if needed'];

// using for loop

for (var m = 0; m < 10; m++) {
    for (var i = 0; i < works.length; i++) {
        var element = works[i]
        console.log(element)
    }
}

// using while loop
// var tenTimes = 0;
// while (tenTimes < 10) {
//     tenTimes++;
//     var work = 0;
//     while (work < works.length) {
//         var element = works[work]
//         console.log(element);
//         work++;
//     }
// }