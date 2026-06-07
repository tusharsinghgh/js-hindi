let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString(''));


// customized date

let theDate = new Date(2023, 0, 23);
// console.log(theDate.toLocaleString());

let thedate1 = new Date(2023, 0, 23, 5, 1)
// console.log(thedate1);

// localString Customized
let newDate = new Date().toLocaleDateString('default', {
    weekday: "long"
});

console.log(newDate);
