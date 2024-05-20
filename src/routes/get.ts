async function routes (fastify, _options) {
    fastify.get('/', async (request, reply) => {
        console.log(request.method);
        console.log(reply);
        return { hello: 'world' };
    });

    fastify.get('/test', async (_request, _reply) => {
        return { hello: 'world' }
    })
}

export default routes;
