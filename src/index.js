const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/password/:appid', (req, res) => {
    try {
        const { appid } = req.params
        res.status(200).json({
            success: true,
            appid: appid
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            success: false
        })
    }
})

app.put('/password/:appid', (req, res) => {
    try {
        const { appid } = req.params
        res.status(200).json({
            success: true,
            appid: appid
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            success: false
        })
    }
})

app.get('/password/:appid', (req, res) => {
    try {
        const { appid } = req.params
        res.status(200).json({
            success: true,
            appid: appid
        })
    }
    catch (error) {

    }
})

app.post('/app', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "app"
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            success: false
        })
    }
})

app.get('/apps', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "app"
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            success: false
        })
    }
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});