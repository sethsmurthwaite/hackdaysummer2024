import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/', async (request, reply) => {
    console.log(request.method);
    console.log(reply);
    return { hello: 'world' };
});

const start = async () => {
    try {
        await app.listen(3000);
        console.log('Server is running on http://localhost:3000');
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
