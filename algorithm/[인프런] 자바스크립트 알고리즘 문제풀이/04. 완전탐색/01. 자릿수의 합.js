/*
    방법 1: 각 배열 요소인 숫자를 문자열로 변환후 split 메서드로 각 자릿수를 배열요소로 하는 배열을 만든다.
            그 후 reduce 메서드로 각 배열 요소 즉, 자릿수를 모두 더함
*/
function solution(n, arr) {
    let answer,
        max = 0;
    for (let i of arr) {
        let sum = i
            .toString()
            .split("")
            .reduce((a, b) => a + b * 1, 0); // * 1은 문자인 b를 숫자로 만들기 위함
        if (sum > max) {
            max = sum;
            answer = i;
        } else if (sum === max) {
            if (i > answer) answer = i;
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

/*
    방법 2: 각 배열 요소인 숫자를 10으로 나눈 뒤 나머지를 더하고 10으로 나누어 소수점 단위는 버리며 이를 반복한다. 
            이 과정을 통해 각 자릿수를 더할 수 있다. 마지막으로 나눈 10은 값이 0 이 나오면서 white문을 탈출한다.
*/

function solution(n, arr) {
    let answer,
        max = 0;
    for (let i of arr) {
        let sum = 0,
            tmp = i;
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) answer = x;
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
