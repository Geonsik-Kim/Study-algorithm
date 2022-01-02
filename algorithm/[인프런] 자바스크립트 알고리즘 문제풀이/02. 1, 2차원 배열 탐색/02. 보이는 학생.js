function solution(arr) {
    let answer = 0,
        tall = 0;
    arr.forEach((item) => {
        if (item > tall) {
            answer++;
            tall = item;
        }
    });

    return answer;
}

const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
