
// These are the DEpendecies
const express = require("express")
const cors = require("cors")
const pokemonController = require("./controllers/pokemonController.js")

// CONFIG
const app = express()

// Middeleware
app.use(cors())
app.use(express.json())
app.use("/pokemon", pokemonController)

// ROUTES
app.get("/", (req, res) => {
    res.status(200).send("Test Server")
})

app.get("*", (req, res) => {
    res.status(404).json({
        Error: 'Page Not Found'
    })
})

// Export
module.exports = app
