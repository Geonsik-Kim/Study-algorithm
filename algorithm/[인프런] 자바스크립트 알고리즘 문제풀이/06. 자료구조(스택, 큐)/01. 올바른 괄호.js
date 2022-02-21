// 스택을 활용
// 괄호의 쌍이 맞다면 YES, 안맞으면 NO를 리턴한다.
// "(" 라면 push ")" 이면 pop을 하여 쌍이 맞다면 배열에는 아무것도 남지 않게된다.
// 쌍이 맞지 않는다면 요소가 없는데 pop 과정을 마주하게되거나 최종적으로 요소가 남게된다.
function solution(s) {
    let answer = "YES";
    let stack = [];
    for (let x of s) {
        if (x === "(") stack.push(x);
        else {
            if (stack.length === 0) return "NO";
            stack.pop();
        }
    }

    if (stack.length > 0) return "NO";

    return answer;
}

let str = "(()(()))(()";
console.log(solution(str));
