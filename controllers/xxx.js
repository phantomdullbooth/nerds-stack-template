// ====================== VARIABLES ====================== //
// ====================== VARIABLES ====================== //

const express = require("express")
const router = express.Router()
const pool = require("../db/db.js")


// ======================== ROUTES ======================= //
// ======================== ROUTES ======================= //

/* GET ALL XXX */
router.get("/api/xxx", async(req, res) => {
    try {
        const xxx = await pool.query("SELECT * FROM xxx WHERE xxx = false ORDER BY zzz DESC")
        res.json(xxx.rows)
    } catch (error) {
        console.error(error.message)
    }
})


// ======================== EXPORT ======================= //
// ======================== EXPORT ======================= //

module.exports = router