import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

// import Genre from "./db/Genre.js";

import genreRouter from "./routers/genre.router.js";

const startServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use("/api/genres", genreRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`server running on ${port} port`))
}

export default startServer;