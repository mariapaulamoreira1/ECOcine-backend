//#configuracoes para o express (local)
const dotenv = require('dotenv');
dotenv.config();
const {
PORT,
pgConnection
} = process.env;
module.exports = {
port: PORT,
urlConnection: pgConnection
}
// pgConnection configuracoes para o postgreSQL remoto
