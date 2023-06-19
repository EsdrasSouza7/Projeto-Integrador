const express = require('express');
const userRoutes = require('./api/UserRoutes');
const organizadorRoutes = require('./api/OrganizadorRoutes');
const eventoRoutes = require('./api/EventoRoutes');
const perguntasRoutes = require('./api/PerguntasRoutes');
const respostasRoutes = require('./api/RespostasRoutes');
const respostarUserRoutes = require('./api/RespostarUserRoutes');
const config = require('./config/default');

const app = express();

app.use(express.json())
app.use(userRoutes)
app.use(organizadorRoutes)
app.use(eventoRoutes)
app.use(perguntasRoutes)
app.use(respostasRoutes)
app.use(respostarUserRoutes)

const PORT = config.server.port
const HOST = config.server.host


const server = app.listen(PORT,HOST, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${HOST}:${server.address().port}`);
});
