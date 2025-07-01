import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Congratulations! You have deployed the app successfully. 2nd time" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
