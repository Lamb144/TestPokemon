const express = require("express")
const pokemon = express.Router()
const pokeArr = require("../data/pokeData.js")
const { v4: uuidv4 } = require("uuid")

// "/" === pokemon

pokemon.get("/", (req, res) => {
    res.status(200).json(pokeArr)
})

pokemon.get("/:pokeID", (req, res) => {
    /* 
     req = {
        body: {

        },
        params: {
            pokeID : "4"
        },
        query: {

        }
    }
    */

    const pokeID = +req.params.pokeID

    const onePokemon = pokeArr.find(obj => obj.id ===
        pokeID)

    if (onePokemon) {
        res.status(200).json(onePokemon)
    }
    else {
        res.status(404).json({
            Error: "Pokemon Not FOund"
        })
    }
})

// Post Route
pokemon.post("/", (req, res) => {
    const body = req.body
    req.body.id = uuidv4()
    pokeArr.push(req.body)

    res.status(200).json(req.body)

})



module.exports = pokemon