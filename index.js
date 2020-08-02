//메소드체이닝
const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);

const shuffle = [];
//candiate.length 가 0 이하가 될떄까지
while (candidate.length > 0) {
  //숫자 45개 만큼 랜덤 추출
  const random = Math.floor(Math.random() * candidate.length);
  //뽑힌 숫자 제거
  const spliceArray = candidate.splice(random, 1);
  //[0]을 해줘야 해당 숫자가 배열형이 아니고 호출됨
  const value = spliceArray[0];
  //해당 숫자 shuffle 배열에 푸쉬
  shuffle.push(value);
}
//slice 함수로 0번째 인덱스 부터 6개 호출 sort 정렬 p ,c 인수를 주어서 p -c 리턴
// 0 미만일시 순서 바꾸는 성질 이용하여 오름차순 정렬
const winBalls = shuffle.slice(0, 6).sort((p, c) => {
  return p - c;
});
const bonus = shuffle[6];

function color(number, tag) {
  if (number <= 10) {
    tag.style.backgroundColor = "red";
  } else if (number <= 20) {
    tag.style.backgroundColor = "orange";
  } else if (number <= 30) {
    tag.style.backgroundColor = "yellow";
  } else if (number <= 40) {
    tag.style.backgroundColor = "blue";
    tag.style.color = "white";
  } else {
    tag.style.backgroundColor = "green";
    tag.style.color = "white";
  }
}

const result = document.querySelector(".result");
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.textContent = winBalls[i];
    result.appendChild(ball);
    color(winBalls[i], ball);
  }, 1000 * (i + 1));
}

const bonusTag = document.querySelector(".bonus");
const plus = document.querySelector(".plus");
setTimeout(() => {
  const bonusBall = document.createElement("div");
  bonusBall.className = "bonusBall";
  bonusBall.textContent = bonus;
  plus.textContent = "+";
  plus.style.fontSize = "50px";
  bonusTag.appendChild(bonusBall);
  color(bonus, bonusBall);
}, 7000);
