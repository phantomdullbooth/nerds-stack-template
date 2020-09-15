// ====================== CONSTANTS ====================== //
// ====================== CONSTANTS ====================== //

const express = require("express")
const cors = require("cors")
const path = require("path")
const port = process.env.PORT || 5000
const app = express();


// ====================== MIDDLEWARE ====================== //
// ====================== MIDDLEWARE ====================== //

app.use(express.static("client/build"));
app.use(cors())
app.use(express.json())


// ====================== CONTROLLERS ===================== //
// ====================== CONTROLLERS ===================== //

const xxxController = require("./controllers/xxx.js")
app.use("/", xxxController)

app.get("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "client/build/index.html"));
});  


// ====================== CONNECTION ====================== //
// ====================== CONNECTION ====================== //

app.listen(port, () => {
    console.log("Dope. NERDS on " + port + "!")
});