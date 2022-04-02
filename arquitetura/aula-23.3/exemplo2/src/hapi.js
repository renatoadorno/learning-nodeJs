const Hapi = require('@hapi/hapi');
const { create, update } = require('./services/customer');
const BookService = require('./services/books');
const { getAll } = require('./models/customer');

const init = async () => {

    const server = Hapi.server({
        port: 3333,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/cliente',
        handler: async (request, h) => {
            const customers = await getAll()
            return customers;
        }
    });

    server.route({
      method: 'POST',
      path: '/cliente',
      handler: async (request, h) => {
          const result = await create(request.payload);

          if(result.error) {
            return h.response({ message: result.message }).code(result.error)
          }

          return h.response(result);
      }
    });

    server.route({
      method: 'PUT',
      path: '/cliente/{id}',
      handler: async (request, h) => {
          const customer = request.payload;

          const result = await update({ ...customer, id: request.params.id });

          if(result.error) {
            return h.response({ message: result.message }).code(result.error)
          }

          return h.response(result);
      }
    });

    server.route({
      method: 'POST',
      path: '/livros',
      handler: async (request, h) => {
          const result = await BookService.create(request.payload);

          return h.response(result);
      }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();