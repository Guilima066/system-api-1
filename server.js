const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(
    PORT, () => {
        console.log(`Server ins running on port ${PORT}`);
    }
);