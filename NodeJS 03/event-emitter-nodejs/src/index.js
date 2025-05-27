import EventEmitter from "events";

const emitter = new EventEmitter();

const firstEvent =  () => {
    console.log("You enter Node.js app");
}

emitter.once("welcome", () => {
    console.log("Firs welcome event");
});

emitter.addListener("welcome", () => {
    console.log("You enter Node.js app addListener");
})

emitter.on("welcome", firstEvent)

emitter.on("welcome", data => {
    const { name, lastName } = data;
    console.log(`welcome to Event Emitters, ${name} ${lastName}`);
});

setTimeout(() => {
    emitter.emit("welcome", { name: "Nata", lastName: "Oliinyk" });
    emitter.removeListener("welcome", firstEvent);
}, 3000);

setTimeout(() => {
    emitter.emit("welcome", { name: "Nata", lastName: "Oliinyk" });
}, 3000);