
<<<<<<< HEAD
    function getValueLabOne() {
        let input = document.querySelector('#OneLabInp').value;
        let sum = input.split('', 3);
        let arr = [
            parseInt(sum[0],),
            parseInt(sum[1],),
            parseInt(sum[2],),
        ];

        console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `,arr[0] + arr[1] + arr[2]);
        let spanT = document.querySelector('#spanTextValue');
        spanT.innerHTML = `<div class="test"> ${arr[0]} + ${arr[1]} + ${arr[2]} = ${arr[0] + arr[1] + arr[2]} </div>`;

        if(input.length > 3) {
            console.error('Value > 3');
            spanT.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення бiльше <u>3</u>!</div> `
        } else if (input.length < 3) {                                                                           // сделать проверку для тип данных NaN
            console.error('Value > 3');
            spanT.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення менше <u>3</u>!</div> `
        }

        // if (typeof arr[0] === 'number' && 'NaN') {
        //     console.error('Тип данных undefined');
        //     spanT.innerHTML = `<span id="error">Помилка</span>: тип данних undefuned`
        // }
    }

    function getValueLabTwo() {
        let input = document.querySelector("#inputTwoLab").value;
        let sum = input.split('', 4);
        let arr = [
            parseInt(sum[0],),
            parseInt(sum[1],),
            parseInt(sum[2],),
            parseInt(sum[3],),
        ];

        const maxValue = Math.max(...arr);
        let span = document.querySelector('#spanLabTwo');
        span.innerHTML = `Max{ ${arr[0]},${arr[1]},${arr[2]},${arr[3]} = ${maxValue} }`;
        if(input.length < 4) {
            console.error('Value > 4');
            span.innerHTML = `<div class="test"><span id="error">Помилка</span>: <u>значення менше 4</u>!</div>`
        } else if (input.length > 4) {
            console.error('Value > 4');
            span.innerHTML = `<div class="test"><span id="error">Помилка</span>: <u>значення бiльше 4</u>!</div>`
        }

        console.log(arr, maxValue,span)
    }

=======
function getValue() {
    let input = document.querySelector('#OneLabInp').value;
    let sum = input.split('', 3);
    let arr = [
        parseInt(sum[0],),
        parseInt(sum[1],),
        parseInt(sum[2],),
    ];

<<<<<<< HEAD
    sum.forEach((sum) => {
        return sum[0] + sum[1] + sum[2]

    });
    console.log(sum)
=======
    console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `,arr[0] + arr[1] + arr[2]);
    let spanT = document.querySelector('#spanTextValue');
    spanT.innerHTML = `${arr[0]} + ${arr[1]} + ${arr[2]} = ${arr[0] + arr[1] + arr[2]}`;
>>>>>>> 0d466e5b0488814ce0aca2ba701b31d2788a7465

    if(input.length > 3) {
        console.error('Value > 3');
        spanT.innerHTML = `<span id="error">Помилка</span>: значення бiльше <u>3</u>!`
    }

<<<<<<< HEAD

    console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `,arr[0] + arr[1] + arr[2]);
    let span = document.querySelector('#spanTextValue');
    span.innerHTML = `${arr[0]} + ${arr[1]} + ${arr[2]} = ${arr[0] + arr[1] + arr[2]}`;
=======
    // if (typeof arr[0] === 'number' && 'NaN') {
    //     console.error('Тип данных undefined');
    //     spanT.innerHTML = `<span id="error">Помилка</span>: тип данних undefuned`
    // }
>>>>>>> 0d466e5b0488814ce0aca2ba701b31d2788a7465
}
>>>>>>> 49810c5c6f29a99eb45b31aa6877c6371dee8b79







    //OOP+ES6_Class
