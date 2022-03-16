const app = require('./src/app');
const port = 9000;

app.listem(port, () => {
    console.log('App esta rodando na porta ${port}')
});
