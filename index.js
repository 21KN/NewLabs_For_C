
function getValue() {
    let input = document.querySelector('#OneLabInp').value;
    let sum = input.split('',3);

    sum.forEach((sum) => {
        return sum[0] + sum[1] + sum[2]

    });
    console.log(sum)

    // for(let num of sum) {
    //     let inner = sum.map((sum) =>{
    //         return  num[0] + num[1] + num[2];
    //     });
    //     console.log(inner, sum, num)
    // }

    // let result = sum.reduce( (sum,result) => {
    //     return sum + result
    // });

    console.log(sum);
}


let mus = [1,2,3]
let result = mus[0] + mus[1] + mus[2];

