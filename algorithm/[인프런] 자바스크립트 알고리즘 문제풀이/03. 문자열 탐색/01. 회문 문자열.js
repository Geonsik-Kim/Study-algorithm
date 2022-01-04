// 방법 1
function solution(str) {
    let answer = "YES";
    let str1 = str.toUpperCase(); // 원본 문자열
    let str2 = str.split("").reverse().join("").toUpperCase(); // 뒤에서 읽은 문자열
    if (str1 !== str2) answer = "NO";

    return answer;
}

let str = "gooG";
console.log(solution(str));

// 방법2
function solution(str) {
    let answer = "YES";
    s = str.toUpperCase();
    let len = str.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (s[i] !== s[len - i - 1]) answer = "NO";
    }

    return answer;
}

let str = "gooG";
console.log(solution(str));
