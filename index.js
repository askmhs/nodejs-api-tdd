import restify from 'restify';
import DBConnection from './config/datasource';

/**
 * Create server
 * @type {*|Server}
 */
const server = restify.createServer({
    name: "nodejs-api-tdd"
});

/**
 * Configure restify parser plugins
 */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/**
 * Starting server
 */
server.listen(3000, () => {
    /**
     * Call DBConnection
     */
    DBConnection();

    console.log('%s listening at %s', server.name, server.url);
});