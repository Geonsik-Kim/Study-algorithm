// 학생들이 제출한 [상품가격, 배송비]의 각 요소별 합계로 전체 배열을 정렬한다.
// 어떤 상품에 50% 할인을 쓰는 것이 좋을지 찾아내기는 쉽지않다.
// 완전탐색을 활용하여 각 상품이 50%할인 받았다고 가정하고 모두 탐색한다.
// 총 예산 28에서 50% 할인된 상품가격과 배송비를 합한 금액을 뺀다.
// 뺀 나머지금액을 이미 합산 가격이 적은 순으로 정렬된 배열에서 순차적으로 뺀다.
// 뺀 횟수를 카운트 하고 그 카운트가 가장 큰 경우가 가장 많은 학생에게 선물을 줄 수 있는 수이다.
function solution(n, product) {
    let answer = 0;

    product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    for (let i = 0; i < product.length; i++) {
        let money = 28 - (product[i][0] / 2 + product[i][1]);
        let cnt = 1;
        for (let j = 0; i < product.length; j++) {
            if (j === i) continue;
            if (product[j][0] + product[j][1] <= money) {
                money -= product[j][0] + product[j][1];
                cnt++;
            } else {
                break;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}

let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];
console.log(solution(28, arr));
