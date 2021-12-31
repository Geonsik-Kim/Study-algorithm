function solution(arr) {
    let answer = [],
        num = 0;
    arr.forEach((item) => {
        if (item > num) answer.push(item);
        num = item;
    });

    return answer;
}

const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
