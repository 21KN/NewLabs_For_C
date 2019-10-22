

    function getValueLabOne() {
        let input = document.querySelector('#OneLabInp').value;
        let sum = input.split('', 3);
        let arr = [
            parseInt(sum[0],),
            parseInt(sum[1],),
            parseInt(sum[2],),
        ];

        let NaNError = arr[0] + arr[1] + arr[2];

        console.log(typeof NaNError, NaNError)

        console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `, NaNError);

        let spanT = document.querySelector('#spanTextValue');
        spanT.innerHTML = `<div class="test"> ${arr[0]} + ${arr[1]} + ${arr[2]} = ${NaNError} </div>`;

        if(input.length > 3) {
            console.error('Value > 3');
            spanT.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення бiльше <u>3</u>!</div> `
        } else if (input.length < 3) {
            console.error('Value > 3');
            spanT.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення менше <u>3</u>!</div> `
        } else if (isNaN(NaNError)) {
            console.error('Число == Nan');
            spanT.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення дорівнює типу <u>NaN</u>!</div> `
        }

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

        let NaNError = arr[0] + arr[1] + arr[2];

        const maxValue = Math.max(...arr);
        let span = document.querySelector('#spanLabTwo');
        span.innerHTML = `Max{ ${arr[0]},${arr[1]},${arr[2]},${arr[3]} = ${maxValue} }`;
        if(input.length < 4) {
            console.error('Value > 4');
            span.innerHTML = `<div class="test"><span id="error">Помилка</span>: <u>значення менше 4</u>!</div>`
        } else if (input.length > 4) {
            console.error('Value > 4');
            span.innerHTML = `<div class="test"><span id="error">Помилка</span>: <u>значення бiльше 4</u>!</div>`
        } else if (isNaN(NaNError)) {
            console.error('Число == Nan');
            span.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення дорівнює типу <u>NaN</u>!</div> `
        }

        console.log(arr, maxValue,span)
    }


function getValueThereLab() {
    let inputValue = document.querySelector('#inputThereLab').value;
    const unsigned = 1;
    const signed = 1;

    console.log(inputValue)

}








    //OOP+ES6_Class
