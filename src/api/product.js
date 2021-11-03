const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    res.json({
      status: 200,
      message: "Got data successfully!!!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
