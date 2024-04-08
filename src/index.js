import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;



// Routes
app.get("/", (request, response) => {
    response.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port`);
});