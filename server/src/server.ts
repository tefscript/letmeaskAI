import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import { fastifyCors } from '@fastify/cors';
import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { getRoomsQuestionsRoute } from './http/routes/get-room-questions.ts';
import { createQuestionRoute } from './http/routes/create-question.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: 'http://localhost:5173'
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler); 
app.register(getRoomsQuestionsRoute);
app.register(createRoomRoute);
app.register(createQuestionRoute);

app.get('/health', () => {
    return 'OK';
})

app.register(getRoomsRoute)

app.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333 })