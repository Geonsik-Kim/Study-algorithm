// 소수 판별
function isPrime(num) {
    if (num === 1) return false;

    // 주어진 수의 제곱근 보다 작고 2보다 큰 정수로 한 번이라도 나누어 진다면 소수가 아니다.
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(arr) {
    let answer = [];
    for (let num of arr) {
        var x = Number(num.toString().split("").reverse().join(""));
        if (isPrime(x)) answer.push(x);
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
