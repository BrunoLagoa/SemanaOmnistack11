const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 *
 * GET: Buscando um registro
 * POST: Criando um registro
 * PUT: Atualizando um registro
 * DELETE: Deletando um registro
 */

/**
 * Query Params: Parâmetros nomeados na rota após ?
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
