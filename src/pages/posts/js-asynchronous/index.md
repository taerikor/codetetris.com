---
title: 비동기(asynchronous) 샌드위치 가게
description: Callback, Promise, Async & Await
date: 2021-08-03
tags:
  - ES6
  - JavaScript
---

![js](../../../images/js_logo.png)

다들 많이 좋아하시는 '써브웨이'라는 샌드위치 가게가 있습니다. 편의점에 들어오는 완제품 샌드위치와 다르게 주문 과정에서 직원과 손님 간에 상호작용으로 결과물이 나옵니다.  
먼저 샌드위치 속 메인 재료를 선택하고 길이, 빵과 치즈의 종류, 굽기, 야채와 소스를 선택하는 정도의 절차가 존재합니다. 이후 포장과 계산을 하고 나서야 드디어 먹을 수 있겠습니다.  
이러한 여러 가지 옵션에서 탄생한 특정한 샌드위치를 아주 좋아해서 그것만을 1주일 동안 기다렸다고 가정해 봅시다. 오직 그것이 아니면 안 되는 것이었죠.  
**그런데 최악의 상황이 벌어졌습니다.**  
손님은 너무나도 많은데 직원은 한 명뿐인 상황이라 주문을 하려면 너무 오랜 시간을 기다려야 하죠. 그뿐만이 아닙니다.  
너무나도 바쁜 가게 속에서 실수로 빵을 굽기도 전에 야채를 넣어버린 것입니다.  
게다가 직원이 원하는 재료가 없어서 주문이 불가능하다고 합니다.  
세상에! 가게는 이미 아수라장이 되었습니다.  
오늘 우리는 이것을 이해하고 해결하여 맛있는 샌드위치를 먹어봅시다.

## 동기? 비동기?

일반적으로 자바스크립트는 정해진 순서대로 진행합니다. 한가지의 작업을 처리해야 다음 작업으로 넘어가게 됩니다.  
이때 만약 큰 데이터를 처리하기 위하여 오랜 시간을 한가지 작업에 많은 시간을 소모한다면 다음 작업은 실행되지 않습니다.  
즉 이러한 처리 방식을 **동기**적이라고 할 수 있습니다. 하지만 현재 웹에 접근할 수 있는 하드웨어의 성능은 과거와는 다르게 엄청난 성장을 했고 동기적 처리 방식으로 무거운 데이터를 다루는 것은 효율적이지 못합니다.  
이제 우리가 하얀 빈 화면을 얼마나 기다릴 수 있을까요?

### single thread javascript

**thread**는 **단일 업무**를 처리하는 실행의 단위입니다.  
하나의 프로세스 안에서 여러 thread가 존재하여 한가지의 일을 할 수 있으나 자바스크립트는 **main thread**라는 하나의 thread만 존재하여 한가지의 일을 순차적으로 진행합니다.

함수 A의 값이 도출되기 전에 함수 B에서 함수 A의 값을 사용한다 하면 당연히 에러를 볼 수 밖에 없습니다.

동시에 진행하고 기다리는 방법을 알아야 합니다.  
동기가 아닌 **비동기 처리 방식**을 고려해야 합니다.

## Callback

**callback** 함수를 활용하면 비동기 방식의 코드를 작성할 수 있습니다.  
인수안에서 함수 참조 값이 지정되고 조건에 부합할 때 실행됩니다.

```js
let num = 0

document
  .querySelector("div")
  .addEventListener("mouseover", () => (num = num + 1))

console.log(num) // 0
```

스크립트를 순차적으로 실행하며 **Callback** 함수를 발견하면 바로 실행하지 않고 백그라운드(queue)에 대기 시킵니다.  
이후 0이 콘솔에 출력되고  
**이벤트 리스너**가 첫 번째 인수인 'mouseover' 조건에 해당하면 Callback 함수를 호출하여 실행합니다.

### 콜백 지옥

```js
chooseMenu(function(Menu) {
  chooseLength(menu, function(length) {
    chooseBread(length, function(bread)) {
      chooseCheese(bread,function(cheese){
        chooseToast(cheese,function(toast){
          //....
        }, onError)
      }, onError)
    }, onError);
  }, onError);
}, onError);
```

콜백 함수 내부에 콜백 함수를 **중첩**으로 생성하는 경우가 있습니다.  
중첩될수록 코드를 이해하기가 상당히 까다롭고 에러 핸들링을 계속해줘야 하는 단점이 극명히 드러납니다.

## Promise

**promise**는 자바스크립트의 객체이며 **비동기** 작업을 위한 분기점입니다.  
`new Promise()` 생성자 함수로 반환된 promise 객체는 두 가지 내부 프로퍼티를 가집니다.

### Promise State

상태를 나타내는 **state** 프로퍼티가 있습니다.

- pending: promise가 생성되고 결과가 반환되기 전까지의 상태
- resolved: 결과가 반환되었을 때의 상태
- fulfilled: 성공적으로 값이 반환되었을 때 상태
- rejected: 반환이 실패하였을 때 상태

### Promise result

**result** 프로퍼티는 결괏값이 반환되지 않은 **pending** 상태에서 `undefined`가 됩니다.  
이후 상황은 두 가지로 나뉘는데

- resolve에 값이 result에 반환됩니다.
- reject에 error가 result에 반환됩니다.

### producing code

```js
let promise = new Promise((resolve, reject) => {
  // executor 함수
  setTimeout(() => resolve("1초 후에 실행됩니다."), 1000)
})
```

**생성자 함수**로 **promise**가 생성되면 **executor** 함수는 자동으로 실행됩니다.  
**executor**에는 주로 비동기 방식을 해야 하는 무거운 작업을 수행하는 함수가 들어갑니다.

`resolve(value)`의 인수 값이 result에 반환됩니다.
`reject(error)`의 인수 error가 result에 반환됩니다.

### consuming code

```js
let promise = new Promise((resolve, reject) => {
  // executor 함수
  setTimeout(() => resolve("과연 결과는?"), 1000)
})
  .then(response => console.log(`${response} 성공!`))
  .catch(error => console.log(new Error(`${error} 실패!`)))
  .finally(() => console.log("실행이 완료 되었습니다."))

// 과연 결과는? 성공!
// 실행이 완료 되었습니다.
```

위엔 결과값을 전달받을 3가지 메소드가 존재합니다.

- `then()`
- `catch()`
- `finally()`

### then

`then()`은 **promise**가 **fulfilled** 되었을 때 첫 번째 인수의 함수가 실행됩니다.  
**rejected**가 되었을 경우 두 번째 인수의 함수가 실행됩니다.  
함수의 인자에는 result의 값이 전달됩니다.  
`then`으로도 에러 핸들링이 가능하지만, `catch` 메소드를 사용하는 것이 가독성이 좋습니다.

### catch

`then`의 두 번째 인수와 마찬가지로 **rejected**가 되었을 경우 콜백 함수가 실행됩니다.  
함수의 인자에는 result의 error가 전달됩니다.  
`.then(null, errorFunction)`과 동일하게 작동합니다.

### finally

**state**와 상관없이 **항상 실행**됩니다.  
인수에 result를 받지 않습니다.  
`finally`는 실행이 성공인지 실패인지 모르지만 다음 consuming code에는 전달됩니다.

앞서 **Callback 지옥**에 빠져있는 코드를 **Promise**로 구출해 봅시다.

```js
chooseMenu()
  .then(menu => chooseLength(menu))
  .then(length => chooseBread(length))
  .then(bread => chooseCheese(bread))
  .then(cheese => chooseToast(cheese))
  // ....
  .catch(onError)
```

promise를 **체이닝**하여 코드도 더욱 간결해지고 파악하기도 훨씬 간편해졌습니다!

## async & await

ES 2017에 추가된 `async/ await` 키워드는 우리의 비동기 코드를 더욱 우아하게 사용할 수 있습니다.  
기존 **Promise**의 문법 상위에서 만들어져 동기적인 코드처럼 순차적으로 이해하기 쉬운 **semantic sugar**입니다.

```js
let greeting = async () => {
  return "hello, async! "
}

greeting().then(res => console.log(res))
// hello, async!
```

### async

함수 앞에 `async` 키워드를 사용하면 해당 함수는 항상 **promise**를 반환합니다.

### await

`await`는 `async` 함수 안에서만 동작합니다.  
`await`라는 단어 뜻에서도 유추할 수 있듯이 **promise**가 반환될 때까지 기다립니다.

```js
let getResult = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("과연 결과는?"), 1000)
  })

  let result = await promise

  console.log(result)
}

getResult()
// 과연 결과는?
```

함수를 호출하고, 함수가 완료될 때까지 진행하지 않고 기다렸다가
**promise**가 처리되면 실행이 재개됩니다.  
이때 promise 객체의 result 값이 변수에 할당됩니다.

### 에러 핸들링

`await`에서 **rejected**가 되었을 경우 `throw` 키워드의 에러 구문과
동일하게 작동합니다.  
따라서 `await`의 에러는 `throw`의 에러처럼 `try/catch`를 사용 가능합니다.

```js
let getResult = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("과연 결과는?"), 1000)
  })
  try {
    let result = await promise

    console.log(`${result} 성공!`)
  } catch (error) {
    console.log(`${error} 실패!`)
  }
}

getResult()
// 과연 결과는? 실패!
```

`try/catch`가 없으면 프라미스가 거부 상태가 됩니다.  
`getResult()`에 `catch` 메소드를 추가하면 처리할 수 있습니다.

마지막으로 배운 `async & await`를 사용하여 우리의 주문을 마무리 해봅시다.

```js
let order = async () => {
 try{
 let menu  = await chooseMenu()
 let length  = await chooseLength(menu)
 let bread  = await chooseBread(length)
 let cheese  = await chooseCheese(bread)
 let toast  = await chooseToast(cheese)
 // ...
 }catch(error){
   onError(error)
 }
```

## Conclusion

이제 각자 역활을 맡은 업무를 여러 직원이 나눠서 효율적으로 처리할 것입니다.  
앞선 일을 처리하기 전에 다음 일을 진행하는 실수도 없어졌습니다.  
우린 이제 맛있는 샌드위치를 먹는 일만 남았습니다!
