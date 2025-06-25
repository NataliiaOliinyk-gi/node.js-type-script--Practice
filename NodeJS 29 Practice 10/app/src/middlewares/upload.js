import multer from "multer";
import * as path from "node:path";

const tempDir = path.resolve("temp");

const storage = multer.diskStorage({
    destination: tempDir,

    filename: (req, file, callback) => {
        const uniquePref = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
        const newname = `${uniquePref}_${file.originalname}`
        callback(null, newname)
    }
});

const limits = {
    fileSize: 1024 * 1024 * 10
};

const fileFilter = (req, file, callback) => {

};

const upload = multer({ storage, limits });

export default upload;