
function getValue() {
    let input = document.querySelector('#OneLabInp').value;
    let sum = input.split('', 3);
    let arr = [
        parseInt(sum[0],10),
        parseInt(sum[1],10),
        parseInt(sum[2],10),
    ];
    console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `,arr[0] + arr[1] + arr[2]);

    // sum.forEach(number => number );

    // sum.forEach((index) => {
    //     return
    // });

    // for(let num of sum) {
    //     let inner = sum.map((sum) =>{
    //         return  num[0] + num[1] + num[2];
    //     });
    //     console.log(inner, sum, num)
    // }

    // let result = sum.reduce( (sum,result) => {
    //     return sum + result
    // });

    // console.log(sum)
    // console.log(sum[0] + sum[1] + sum[2]);
}

