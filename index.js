
function getValue() {
    let input = document.querySelector('#OneLabInp').value;
    let sum = input.split('', 3);
    let arr = [
        parseInt(sum[0],),
        parseInt(sum[1],),
        parseInt(sum[2],),
    ];

    if(input.length > 3) {
        console.error('Value > 3') // дописать проверку на количество вводимых данных
    }

    console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `,arr[0] + arr[1] + arr[2]);
    let span = document.querySelector('#spanTextValue');
    span.innerHTML = `${arr[0]} + ${arr[1]} + ${arr[2]} = ${arr[0] + arr[1] + arr[2]}`;
}

