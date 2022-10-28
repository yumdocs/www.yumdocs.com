import path from 'node:path';
import express from 'express';
import {YumTemplate} from '@yumdocs/yumdocs';

const INPUT = './input.docx';
const OUTPUT = './output.docx';

// Create an express app with a JSON parser
const app = express();
app.use(express.json());

// Handle posts to /yumdocs
app.post("/yumdocs", async(req, res, next) => {
    try {
        const t = new YumTemplate();
        const i = path.resolve(process.cwd(), INPUT);
        const o = path.resolve(process.cwd(), OUTPUT);
        await t.load(i);
        await t.render(req.body);
        await t.saveAs(o);
        // res.download(o);
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

// Launch the web app
app.listen(3000, () => {
    console.log("Server running on port 3000");
});