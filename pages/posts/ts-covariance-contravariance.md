---
title: TypeScript 的协变与逆变
date: 2026-11-17T12:21
layout: post
---

在 TypeScript（TS）中，协变（Covariance）和逆变（Contravariance）听起来像是高深的数学名词，非常劝退。但其实它们解决的是一个日常写代码时最基础的问题：“我能不能把 A 类型的值，安全地赋值给 B 类型的变量？”

为了彻底弄明白这两个概念，我们需要先从最基础的“父子类型”开始讲起。

<br>

__什么是父类型与子类型？__

在 TS 中，判断谁是“父类型”、谁是“子类型”，核心看谁的属性更具体、范围更小。范围更小、限制更严格的，就是子类型。

举个最简单的例子：

```ts
// 父类型：动物
interface Animal {
  name: string;
}

// 子类型：狗（继承了动物，且多了一个技能）
interface Dog extends Animal {
  bark(): void;
}
```

在这里，我们可以看到：

- `Animal` 是父类型（范围大，所有的狗都是动物）
- `Dog` 是子类型（范围小，属性更具体）

根据面向对象最基本的**里氏替换**原则（子类型可以替换父类型）：

```ts
let animal: Animal = { name: '通用动物' };
let dog: Dog = { name: '旺财', bark: () => console.log('汪！') };

// ✅ 合法：把“子类型”赋值给“父类型”
animal = dog; 

// ❌ 报错：不能把“父类型”赋值给“子类型”
// 因为 animal 身上没有 bark() 方法，万一后面调用 dog.bark() 程序就崩溃了！
dog = animal; 
```

记住，日常赋值时，“子”可以赋给“父”，反过来则不行。

<br>

__什么是协变？__

当我们将基础类型包装进数组、对象、Promise 等复杂结构中时，如果它们的赋值方向和原类型保持一致，这就叫协变（协同变化）。

以数组为例，既然 `Dog` 可以赋值给 `Animal`，那么 `Dog[]`（狗的数组）能不能赋值给 `Animal[]`（动物的数组）呢？

```ts
let animals: Animal[] = [];
let dogs: Dog[] = [{ name: '旺财', bark: () => {} }];

// ✅ 合法！这就是协变
animals = dogs; 
```

为什么安全？

因为你拿到 `animals` 这个数组后，按规矩你只会读取里面每个元素的 `.name` 属性，而每只 `Dog` 身上绝对有 `.name`。

**协变就是父子关系怎么变，包装后的类型就跟着怎么变。**

<br>

__什么是逆变？__

逆变通常发生在函数的参数上。当类型被放到函数参数的位置时，它的赋值方向会完全反转！

举个列子，假设我们需要一个“处理狗的函数”，类型定义如下：

```ts
type HandleDog = (dog: Dog) => void;
```

现在有两个现成的函数：

- `feedAnimal`: 接收任何 `Animal`，只看它的 `name`。
- `trainDog`: 专门接收 `Dog`，且内部一定会调用 `dog.bark()`。

```ts
const feedAnimal = (animal: Animal) => {
  console.log(`喂食给：${animal.name}`);
};

const trainDog = (dog: Dog) => {
  dog.bark(); // 必须要求传入的参数有 bark 方法！
};
```

现在，我们要给 `HandleDog` 类型的变量赋值：

```ts
// ✅ 合法！把接收“父类型(Animal)”的函数，赋值给需要“子类型(Dog)”的函数变量
let myDogHandler: HandleDog = feedAnimal;

// 执行时，我们会传入一只具体的狗：
myDogHandler({ name: '旺财', bark: () => console.log('汪！') });
```

为什么这是安全的？

- `myDogHandler` 承诺：调用我的时候，肯定会传进来一只 `Dog`（既有 `name` 又有 `bark`）。
- `feedAnimal` 的要求：只要传给我的东西有 `name` 就行。

既然传进来的是一只 `Dog`，它当然有 `name`，所以 `feedAnimal` 能够完美运行，绝对不会报错！

反过来，如果我们把“需要子类型（Dog）”的函数，赋值给“接收父类型（Animal）”的变量，就会出大事：

```ts
type HandleAnimal = (animal: Animal) => void;

// ❌ 报错！（注意：需在 tsconfig.json 中开启 strictFunctionTypes: true）
let myAnimalHandler: HandleAnimal = trainDog;

// 假设允许赋值，一旦有人传入一只猫，trainDog 内部调用 bark() 就会直接报错崩溃！
myAnimalHandler({ name: '咪咪' }); 
```

可以认为：**逆变就是类型放到函数参数里，父子赋值方向完全逆转。**

<br>

如果把函数的参数和返回值放在一起看，再深入对比下，规律就非常清晰了：

- 参数：逆变（要求更宽松的函数，可以替换要求更严格的函数）。
- 返回值：协变（返回更具体结果的函数，可以替换返回更宽泛结果的函数）。

```ts
// 目标类型：传入 Dog，返回 Animal
type Fn = (dog: Dog) => Animal;

// ✅ 完美匹配：
// 参数接收更宽泛的 Animal（逆变）
// 返回值提供更具体的 Dog（协变）
const validFn: Fn = (animal: Animal): Dog => {
  console.log(animal.name);
  return { name: '小狗', bark: () => {} };
};
```

<small style="color: #999">_设 Sub 为子类型，Super 为父类型_</small>

| 所在位置 | 变化规律 | 赋值规则 | 记忆口诀 |
| - | - | - | - |
| 普通变量 / 数组 / 对象属性 | 协变 | `Sub` → `Super` | 子赋父，顺理成章 |
| 函数返回值 | 协变 | `() => Sub` → `() => Super` | 返回得更多，绝对安全 |
| 函数参数 | 逆变 | `(x: Super) => void` → `(x: Sub) => void` | 吃得越少（要求越低），越能干活 |

<br>

**注意：**

1. 需要**开启严格模式**：确保 `"strict": true`（或至少 `"strictFunctionTypes": true`）。否则 TS 为了兼容旧代码，会让函数参数变成“双向协变”，导致上面提到的 `myAnimalHandler = trainDog` 不会报错，埋下运行时隐患。

2. 用“消费者”和“生产者”来理解：
  - 生产者（如返回值、数组读取）：往外吐数据，吐出更具体的子类型永远安全（协变）
  - 消费者（如函数参数）：往里吃数据，胃口越大（能接受父类型）的函数越安全（逆变）
