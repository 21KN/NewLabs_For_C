
    //#1Lub

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

    //#2Lub

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
            console.error('Value < 4');
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

    //#Lub3

    function getValueThereLab() {

        let inputValue = document.querySelector('#inputThereLab').value;
        let numValueBit = null;

        //numVer

        const int = 4;            //32 под разрядный проц выделяют 4 байта, под 16 2
        const char = 1;           // выделают дин.количество памяти, обычно это 1 байт
        const bool = 1;
        const float = 4;
        const double = 8;         // x2 от float

        //specifierVer

        const short = null;
        const long = null;
        const signed = null;
        const unsigned = null;

        //add signed

        const signedLongInt = 4;      // 4байт

        //add unsigned



        //Filter

        if (inputValue === 3) {

        }


        console.log(inputValue)
    }

    //#Lab4

    function maxMinValue() {
        const inputx1 = document.querySelector('#inputFourLabx1').value;
        const inputx2 = document.querySelector('#inputFourLabx2').value;
        const inputx3 = document.querySelector('#inputFourLabx3').value;
        const inputx4 = document.querySelector('#inputFourLabx4').value;
        const span = document.querySelector('#spanLabFour');

        let maxValue =  Math.max(inputx1, inputx2, inputx3, inputx4);
        let minValue = Math.min(inputx1, inputx2, inputx3, inputx4);

        if (inputx1 === maxValue) {
            span.innerHTML = `x1 = ${inputx1} max `;
        } else if (inputx1 === minValue) {
            span.innerHTML = `x1 = ${inputx1} min `;
        } else {
            span.innerHTML = `x1 = ${inputx1}`;
        }

        if (inputx2 === maxValue) {
            let maxInptx2 = inputx2
            span.innerHTML = `x2 = ${inputx2} max<br>`;
        } else if (inputx1 === minValue) {
            span.innerHTML = `x2 = ${inputx2} min<br>`;
        } else {
            span.innerHTML = `x2 = ${inputx2}<br>`;
        }

        if (inputx3 === maxValue) {
            span.innerHTML = `x3 = ${inputx3} max<br>`;
        } else if (inputx1 === minValue) {
            span.innerHTML = `x3 = ${inputx3} min<br>`;
        } else {
            span.innerHTML = `x3 = ${inputx3}<br>`;
        }

        if (inputx4 === maxValue) {
            span.innerHTML = `x4 = ${inputx4} max<br>`;
        } else if (inputx1 === minValue) {
            span.innerHTML = `x4 = ${inputx4} min<br>`;
        } else {
            span.innerHTML = `x4 = ${inputx4}<br>`;
        }

        // if (inputx2 === maxValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx2} max`
        // } else if (inputx2 === minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx2} min`
        // } else if (inputx2 > minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx2}`
        // }
        //
        // if (inputx3 === maxValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx3} max`
        // } else if (inputx3 === minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx3} min`
        // } else if (inputx3 > minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx3}`
        // }
        //
        // if (inputx4 === maxValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx4} max`
        // } else if (inputx4 === minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx4} min`
        // } else if (inputx4 > minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx4}`
        // }


        // if (true) {
        //     span.innerHTML = ` <br>x1 = ${inputx1} <br> x2 = ${inputx2} <br> x3 = ${inputx3} <br> x4 = ${inputx4}`;
        // }


        console.log(maxValue)


    }



                           //OOP+ES6_Class   +реализовать все при помощи класов


    class allLabs {
        constructor() {

        }

        LabOne() {

        }

        LabTwo() {

        }

        LabThere() {

        }

        LabFour() {

        }

        LabFive() {

        }


    }
