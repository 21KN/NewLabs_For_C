
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

