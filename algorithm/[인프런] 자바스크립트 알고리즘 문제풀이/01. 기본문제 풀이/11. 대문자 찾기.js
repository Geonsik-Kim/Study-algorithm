function solution(s) {
    let answer,
        count = 0;
    for (let x of s) {
        if (x == x.toUpperCase()) count++;
    }

    answer = count;
    return answer;
}

const str = "KoreaTimeGood";
console.log(solution(str));
