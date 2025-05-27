console.log("Start"); // 1 основной

setTimeout(() => {
    console.log("Timeout callback"); // 4 - таймеры
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise callback"); // 3  - микрозадачи
    })

console.log("End"); //2 - основной