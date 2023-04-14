import express from "express";
// import cors from "cors";

const PORT = process.env.PORT || 5050;
const app = express();
// app.use(cors()); // cors is kind of weak security - so i'm using proxy settings in vite.config.js instead

const moves = ["rock", "paper", "scissors"];

app.get("/rps", (req, res) => {
    const choice = Math.floor(Math.random() * moves.length);
    const move = moves[choice];
    res.send(move);
});

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}`);
});
