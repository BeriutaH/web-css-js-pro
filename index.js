console.log("yo!")
// 变量跟常量
    // var: 全局作用域,
    // let值可以被修改
    // const不能修改,但是const如果声明的是数组，其内部的值是可以被改变的，
    let age = 30;
    // const age = 30;  // 报错
    age = 31
    // 在使用const时在声明是就要初始化数值
    // const score;  // 报错
    console.log(age)
//原生数据类型
    // String字符串, Number数字, Boolean布尔值, null空值, undefined未定义
        const username = "John";
        const num = 23;
        const isCool = true;
        const rate = 4.5;
        const x = null;
        const y = undefined;
        let z;
        // 查看数据类型
        console.log(typeof username)
    // 字符串的使用
        const name = "Beriuta";
        const ageB = 23;
        console.log("My name is " + name + " and I am age " + age);
        console.log(`My name is ${name} and I am age ${age}`);
        const s = "Hello World";
        // 长度
        console.log(s.length);
        // 切片
        console.log(s.substring(0, 5).toUpperCase());  // 大写
        // 分割
        console.log(s.split(""));  // 返回数组

// 数组
    const number1 = [1,2,3,"23", true];
    number1.push("why");  // 最后面添加
    number1.unshift("we");  // 最前面添加
    number1.pop();  // 删除最后一个
    console.log(number1);
    console.log(Array.isArray(number1));
    console.log(number1.indexOf("we"));

// 对象
    const person = {
        firstName:"John",
        lastName:"Doe",
        age:20,
        hobbies: ["music", "movies", "sports"],
        address: {
            street: "50 main st",
            city: "Boston",
            state: "MA",
        },
    };
    console.log(person.address.city);
    console.log(person.hobbies[1]);
    // 解包
    const { firstName, lastName, address: {city} } = person;
    console.log(firstName, lastName, city);
    person.email = "xiaogui@123.com"
    console.log(person);
//数组json
    const todos = [
        {
            id: 1,
            text: "Take out trash",
            isCompleted:true,
        },
        {
            id: 2,
            text: "Meeting with boss",
            isCompleted:true,
        },
        {
            id: 3,
            text: "Dentist appt",
            isCompleted:false,
        },
    ];
    console.log(todos[1].text);
    const todosJSON = JSON.stringify(todos);
    console.log(todosJSON);

// if, == 表示值相同，类型可以不同，===表示值和类型都相同
    const n = 20;
    if (n === 10) {
        console.log("n is 10");
    } else if (n > 10) {
        console.log("n is greater than 10")
    } else {
        console.log("n is less than 10")
    }

// 三目运算
    const d = 10;
    const color = d > 10 ? "red" : "blue";
    console.log(color)

// switch语句
    switch (color) {
        case "red":
            console.log("color is red");
            break;
        case "blue":
            console.log("color is blue");
            break;
        default:
            console.log("color is Not red or blue")
    }

// for循环
    for (let i = 0; i < 10; i++) {
        console.log(`For Loop Number: ${i}`)
    }
    for (let todo of todos) {
        console.log(todo.text)
    }

// while 循环
    let nn = 0;
    while (nn<10) {
        console.log(`While Loop Number: ${nn}`);
        nn += 1;
    }


