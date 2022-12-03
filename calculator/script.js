// const buttons = document.querySelectorAll('.buton');
// let string = "";
// ;

// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML === '=') {
//             string = eval(string);
//             document.querySelector(".inp").value = string;
//         }
//         else if(e.target.innerHTML == 'C') {
//             string = " ";
//             document.querySelector(".inp").value = string;

//         }
//         else if(e.target.innerHTML == '%') {
//             string = eval(string) * 100;
//             document.querySelector(".inp").value = string;
//         }
//         else {
//             string = string + e.target.innerHTML;
//             document.querySelector(".inp").value = string;

//         }
//         // console.log(string)
//     })
// })
let string = "";
let button = document.querySelectorAll(".buton");
Array.from(button).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.inp').value = string;
        }
        else if(e.target.innerHTML == '%') {
            string = eval(string) * 100;
            document.querySelector('.inp').value = string;
        }
        else if(e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('.inp').value = string;
        }
        else {

            string = string + e.target.innerHTML;
            document.querySelector('.inp').value = string;
        }
    })
})