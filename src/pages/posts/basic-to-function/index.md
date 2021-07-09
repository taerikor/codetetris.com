---
title: function의 껍데기
description: 함수의 얇은 막을 까보자
date: 2021-07-08
tags:
  - ES6
  - JavaScript
---

본격적으로 자바스크립트를 써먹을 시간이 왔습니다. 입문자들이 골치 아플 시간이 왔죠. 가볍게 지나가려 해도 늪처럼 발이 빠지지 않습니다. 그래도 겁부터 먹지 말고 천천히 알아가봅시다.  
우린 이미 함수를 알고 있고 사용하였습니다.

## 함수 선언문

함수의 **구성 요소**는 간단합니다.

- `function` 예약어
- 함수 이름
- () 괄호 속 인자
- {} 중괄호 속 함수 본문

```js
function sayHello(name) {
  let korean = "안녕하세요!"
  console.log(`${korean} ${name}`)
}

sayHello("taeri") // 안녕하세요! taeri

console.log(korean) // Uncaught ReferenceError: korean is not defined
```

선언된 함수는 함수 이름 뒤에 () 괄호를 붙여 호출할 수 있습니다.  
괄호 속에 인수를 넣으면 외부에서 값을 전달할 수 있습니다.

이미 많이 사용한 `console.log(...)`도 함수였단 걸 알 수 있습니다.

## 함수 표현식

또 다른 함수를 만드는 방법에는 함수 표현식이 있습니다.
함수를 만들어서 **변수에 할당**하는 방식을 뜻합니다.

```js
let sayHello = function () {
  console.log("안녕하세요!")
}

sayHello() // 안녕하세요!
```

함수는 **값**입니다. 함수 이름 뒤에 ()을 붙이지 않으면 실행되지 않기 때문에 변수에 함수 코드 자체를 할당 할 수 있습니다.

### 선언문과 표현식의 차이?

앞서 작성된 [게시물](http://localhost:8000/posts/variable-constant/)에서 `var`를 설명할 때 호이스팅을 언급한 적이 있습니다.
기본적으로 자바스크립트에서 함수는 **호이스팅** 됩니다.

```js
declaration() // 함수 선언문
expression() //Uncaught ReferenceError: Cannot access 'expression' before initialization

function declaration() {
  console.log("함수 선언문")
}

let expression = function () {
  console.log("함수 표현식")
}
```

전역 함수 선언문으로 작성된 함수는 자바스크립트 엔진이 스크립트를 실행하기 전에 함수를 찾아서 생성합니다.  
하지만 함수 표현식은 스크립트를 실행한 후 해당 함수에 도달했을 때 생성됩니다.

## 화살표 함수

간결한 함수를 더욱 간결하게 표현하기 위하여 탄생한 함수가 있습니다.  
물론 여러 가지 기능이 더해져서 사용됩니다.

- `function` 예약어 대신 `=>`를 사용합니다.
- 인자가 한 개라면 () 괄호가 생략 가능 하나 두 개 이상이거나 없으면 괄호를 붙여야 합니다.

```js
let arrow = () => "화살표 함수"

console.log(arrow()) // 화살표 함수
```

생김새를 감안해도 무언가 다릅니다. 함수를 실행하였는데 `=>` 뒤에 나오는 값을 반환하는 것을 알 수 있습니다.

```js
let arrow = function () {
  return "화살표 함수"
}
```

함수 표현식으로 표현하면 이렇습니다.

그렇다면 화살표 함수의 본문을 **여러 줄** 사용하려면 어떻게 해야 할까요?  
마찬가지로 `=>` 뒤에 **중괄호**를 이용한다면 가능합니다.

```js
let arrow = () => {
  "화살표 함수"
}
console.log(arrow()) // undefined
```

하지만 전처럼 값을 바로 반환하진 않고 `return`을 사용하지 않으면 `undefined`을 반환합니다.

또한 화살표 함수는 `this`와 `super`가 없는데 후에 **객체**를 포스팅 할 때 무엇인지 알아보도록 하고 지금은 간략하게 언급만 하고 넘어가겠습니다.

지금 은근슬쩍 지나친 것이 있습니다.

## return

함수는 동작하고 변환하는 것뿐만 아니라 값을 **반환** 할 수 있습니다.

```js
function sum(a, b) {
  if (b === undefined) {
    return "두번째 값을 입력 하세요."
  }

  return a + b
}
console.log(sum(3, 5)) // 8
console.log(sum(2)) // 두번째 값을 입력 하세요.
```

함수 내의 진행이 `return`에 도착했을 때 값을 반환하고 함수는 **종료**됩니다.  
`return` 을 지나면 그 아래는 진행하지 않습니다.

사용 예로써 **조건문** 등을 사용하여 분기처리를 할 때  
혹은 하나의 함수가 너무 많은 역활을 할 경우 분리하기 위해 개별적안 값을 반환하는 함수로 만들 때도 사용됩니다.

## 예약 실행

우리는 함수를 잠시 뒤에 혹은 일정 시간 간격으로 실행하고 싶을 수 있습니다.
그럴 때 사용하는 두 가지 방법이 있습니다.

### setTimeout

`setTimeout`은 함수를 **일정 시간 뒤**에 실행 합니다.

```js
let timer = setTimeout(() => console.log("3초 뒤에 실행됩니다."), 3000, null)

console.log(timer) // 타이머 식별자가 반환됨 (숫자형)
```

- 첫 번째 인수는 실행할 **함숫값**을 받습니다.
- 두 번째 인수는 딜레이할 시간을 **밀리초**(1초의 1/1000)로 받습니다. 즉 1초는 1000입니다.
- 세 번째 인수부턴 함수에 전달할 값입니다.
- setTimeout을 호출하면 **타이머 식별자**가 반환됩니다.

첫 번째 인수에 전달된 함수는 실행시키지 않고 값을 전달해야 합니다. 따라서 문자열로 된 함수도 정상 작동하지만 권장되진 않습니다.

### clearTimeout

`setTimeout`을 취소하고 싶을 땐 `clearTimeout`을 사용하면 됩니다.

```js
let timer = setTimeout(() => console.log("3초 뒤에 실행됩니다."), 3000)

clearTimeout(timer) // 아무일도 일어나지 않습니다.
```

### setInterval

`setInterval`은 함수를 **주기적인 시간으로 반복** 실행합니다.

```js
let timer = setInterval(() => console.log("1초 마다 실행됩니다."), 1000)

setTimeout(() => clearInterval(timer), 3000) //3초 뒤에 timer가 좋료됩니다.
```

`setTimeout`과 문법은 동일합니다.
마찬가지로 `clearInterval`을 사용하면 `setInterval`이 취소됩니다.

## 실행 순서

`setTimeout`의 두번째 인수에 0이나 값을 지정하지 않으면 딜레이는 0이 됩니다.  
그렇다면 아래 상황은 어떻게 실행될까요?

```js
setTimeout(() => console.log("A"), 0)

console.log("B")
```

B가 먼저 나온 후 A가 나옵니다. 이것은 **스크립트 종료 후**에 `setTimeout`으로 저장되어있던 함수가 **실행**되는 것을 알 수 있습니다.

### 주석

함수에 관하여 아주 **얕게** 알아보았습니다. 사실 어느 정도가 적정 수준인진 모르겠습니다.  
그 속에는 재사용 가능하며 적재적소에 배치되는 것, 유지 보수가 편하며 한가지의 동작만 하고 가독성이 좋아야 하는 등의 많은 것이 있습니다.  
갈 길이 머니 마음 급히 하지 않고 꾸준히 나아가 보는 게 좋을 것 같습니다.
