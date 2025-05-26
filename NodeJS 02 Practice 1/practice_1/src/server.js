import http from "node:http";

const server = http.createServer((request, response) => {
    switch (request.url) {
        case "/":
            return response.end("<h1>Welcome to the Home Page!</h1>")
        case "/about":
            return response.end("<h1>About Us</h1>")
        default:
            return response.end("<h1>404 Not Found</h1>");
    }
});

server.listen(3000, () => console.log("Server = port: 3000"));
