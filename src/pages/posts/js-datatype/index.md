---
title: 스크립트의 재료, Data Type
description: 자료형 7가지를 알아보자
date: 2021-06-30
tags:
  - ES6
  - JavaScript
---

![thumbnail](./thumb.png)

이전 포스팅 [JavsScript를 소개합니다!](https://www.codetetris.com/posts/js-introduction/) 를 보면 Brendan Eich가 초기 자바스크립트를 만들었다고 서술하였는데 그 기간이 10일이 걸렸다고 합니다. 지금의 자바스크립트는 상당히 진화하였지만 자료형을 보면 조금은 혼란스러움이 느껴집니다.  
그동안 수많은 사람들의 손을 거쳐 탄생한 **자료형 7가지**를 살펴보겠습니다.

## 문자형 (String)

```js
let korean = "안녕하세요?"
let english = "hello?"
let dutch = "hallo?"
```

문자형은 **따옴표** 속에 문자를 넣어 사용됩니다.

```js
let string = 'hello?"
//Uncaught SyntaxError: Invalid or unexpected token

console.log(string)
```

따옴표는 **''(작은 따옴표)**, **""(큰 따옴표)** 가 동일하게 사용되지만 문자열이 시작될때 사용한 따옴표와 끝맺을때 사용된 따옴표가 동일해야 합니다.

그 외에 부가적인 기능을 하는 문자열이 있습니다.

### 리터럴 문자열 (literal)

**``(역 따옴표)** 를 사용하는 리터럴은 ${}을 사용하여 문자열 사이에 **변수** 등을 쉽게 사용할수 있습니다.

```js
let korean = "안녕하세요?"
let english = "hello?"
let dutch = "hallo?"
const sayHello = `${korean}는 영어로 ${english} 네덜란드어로 ${dutch} 입니다`

console.log(sayHello) //"안녕하세요?는 영어로 hello? 네덜란드어로 hallo? 입니다"
```

또한 **표현식**을 사용할 수 있어 아주 편리합니다.

```js
let expression = 10 + 30
const isPositiveNum = `${expression}은 ${
  expression > 0 ? "양수입니다" : "양수가 아닙니다"
}`

console.log(isPositiveNum) //"40은 양수입니다"
```

좋은 예제는 아니지만 여러가지 응용이 가능합니다.

## 숫자형(Number)

숫자형은 일반적인 숫자와 `Infinity`, `NaN` 같은 특수한 값이 있습니다.
`Infinity`는 이름만 봐도 유추할 수 있듯이 **무한대**를 나타냅니다.  
`NaN`은 **Not a Number**이라는 뜻으로 계산식에서 **결과가 숫자가 아닐때** 반환됩니다.

```js
let expression = "10" - 5
console.log(expression, typeof expression) //5 "number"
```

자바스크립트에서는 문자형에 숫자를 연산할 경우 문자열을 숫자로 형변환 합니다.

```js
let expression = "ten" - 5
console.log(expression) //NaN
```

하지만 숫자가 아닌 문자에 연산을 할 경우 `NaN` 를 반환합니다.

## BigInt

자바스크립트에선 **9007199254740991** 보다 크거나 **-9007199254740991**보다 작은 수를 숫자형으로 나타낼 수 없습니다.  
필요한 경우에 정수 끝에 **n**을 붙여 길이에 상관 없는 정수를 사용할 수 있습니다.  
(현재 IE에서는 호환되지 않습니다.)

## 논리형 (Boolean)

`true`와 `false`를 반환하는 자료형 입니다.

```js
console.log(Boolean(-1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean("string")) // true
console.log(Boolean("")) // false
```

0, 빈 문자열, `null`, `undefined`, `NaN`은 `false`  
그 외에는 모두 `true`가 됩니다.

### 논리연산자

세 종류의 논리 연산자 `||`, `&&`, `!`이 있습니다.

#### ||(OR)

인수가 하나라도 `true`가 있다면 `true`를 반환합니다. 피연산자가 모두 `false` 일 경우에만 `false`를 반환합니다.

```js
console.log(0 || 1 || true) // 1
```

각 피연산자를 불린형으로 변환합니다. 완쪽에서 부터 오른쪽으로 첫번째 `true`를 찾으면 **변환 전의 값**을 반환합니다.

#### && (AND)

인수가 모두가 `true`일 때 `true`를 반환합니다. 하나라도 `false`일 경우는 `false`를 반환합니다.

```js
console.log(1 && 0 && true) // 0
```

마찬가지로 피연산자를 불린형으로 변환합니다. 완쪽에서 부터 오른쪽으로 첫번째 `false`를 찾으면 **변환 전의 값**을 반환합니다.

&&의 우선순위가 ||보다 높습니다.

#### ! (NOT)

피연산자를 불린형으로 변환한 후 값의 **반대값**을 반환합니다.

```js
console.log(!0) // ture
console.log(!10 > 7) // false
```

NOT의 우선순위가 논리연산자 중에 가장 높습니다.

## null

자바스크립트에선 `null`을 **존재하지 않거나, 비어 있거나, 알 수 없는 값**을 나타내는 데 사용합니다.

## undefind

`undefined`는 **값이 할당되지 않은 상태**를 나타낼 때 사용합니다.

```js
let name
console.log(name) //undefind
```

`undefined`는 값이 할당되지 않은 변수의 초기값을 위해 **예약어**로 주로 샤용 됩니다.

## 객체(object)

객체는 **중괄호** {}를 이용해 만들 수 있습니다. 중괄호 안에는 키(key): 값(valse)로 구성된 프로퍼티를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 가능합니다.

```js
let user = {
  name: "taeri",
  age: 25,
  gender: "male",
  bio: function () {
    return `I'm ${this.name}, and ${this.age} years old`
  },
}

console.log(user.bio())
```

: 을 기준으로 왼쪽엔 **키**가, 오른쪽엔 **값**이 위치합니다.  
**점 표기법**을 이용하면 프로퍼티 값을 읽을 수 있습니다.
`const`로 선언된 객체는 수정될 수 있습니다.

```js
let user = {
  name: "taeri",
  age: 25,
  gender: "male",
  bio: function () {
    return `I'm ${this.name}, and ${this.age} years old`
  },
}

user.location = "busan"
console.log(user.location) //busan

delete user.location
console.log(user.location) //undefined
```

추가, 수정, 삭제가 가능합니다.

### 대괄호 표기법

```js
let user = {}

user["korean age"] = 26
console.log(user["korean age"]) // 26
```

**점 표기법**은 띄어쓰기를 할 경우 이해하지 못합니다. 키에 띄어쓰기가 필요할 경우 **대괄호 표기법**을 이용하여 값을 추가하거나 읽을 수 있습니다.
