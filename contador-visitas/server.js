const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const filePath = './visits.txt';

app.use(cors());

app.get('/visitas', (req, res) => {
    let visitas = 0;

    if (fs.existsSync(filePath)) {
        visitas = parseInt(fs.readFileSync(filePath, 'utf-8')) || 0;
    }

    visitas += 1;

    fs.writeFileSync(filePath, visitas.toString());
    res.json({ visitas });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
