// import http from "node:http";
// const server = http.createServer((req, res) => { });

import { createServer } from "node:http";
import emitter from "./logger.js";

const server = createServer((req, res) => {
    switch (req.url) {
        case "/":
            emitter.emit("info-log", `Request ${req.method} ${req.url} 200`);
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify({ message: "Home Page" }));
            break;
        case "/products":
            emitter.emit("info-log", `Request ${req.method} ${req.url} 200`);
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify({ message: "Products Page" }));
            break;
        default:
            emitter.emit("error-log", `Error Request ${req.method} ${req.url} 404`);
            res.statusCode = 404;
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify({ message: "Not Found" }));
            break;
    }
});

server.listen(3000, () => emitter.emit("info-log", "Server running on 3000 Port"));