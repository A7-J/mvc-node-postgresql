const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./config/database'); // Importa a conexão
const studentRoutes = require('./routes/studentRoutes'); // Suas rotas

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs'); // ou a sua template engine correspondente
app.set('views', path.join(__dirname, 'views'));

app.use('/', studentRoutes);

// Sincroniza o banco de dados (Cria as tabelas se não existirem) e liga o app
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('🚀 Servidor rodando em http://localhost:3000 com Banco SQL!');
    });
}).catch(err => {
    console.error('Falha ao conectar no banco de dados:', err);
});
