
function getValue() {
    let input = document.querySelector('#OneLabInp').value;
    let sum = input.split('', 3); // НЕ ПОДХОДИТ для перебора в намбер
    let sumNew = Number(sum);

    // {
    //     one: sum[0],
    //     two: sum[1],
    //     there: sum[2],
    // };

    console.log(sumNew);

    sum.forEach(number => number );

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

    console.log(sum)
    // console.log(sum[0] + sum[1] + sum[2]);
}

