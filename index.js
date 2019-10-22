
function getValue() {
    let input = document.querySelector('#OneLabInp').value;
    let sum = input.split('', 3);
    let arr = [
        parseInt(sum[0],),
        parseInt(sum[1],),
        parseInt(sum[2],),
    ];

    console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `,arr[0] + arr[1] + arr[2]);
    let spanT = document.querySelector('#spanTextValue');
    spanT.innerHTML = `${arr[0]} + ${arr[1]} + ${arr[2]} = ${arr[0] + arr[1] + arr[2]}`;

    if(input.length > 3) {
        console.error('Value > 3');
        spanT.innerHTML = `<span id="error">Помилка</span>: значення бiльше <u>3</u>!`
    }

    // if (typeof arr[0] === 'number' && 'NaN') {
    //     console.error('Тип данных undefined');
    //     spanT.innerHTML = `<span id="error">Помилка</span>: тип данних undefuned`
    // }
}

