const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Server is Working on http://localhost:${process.env.PORT}`);
})