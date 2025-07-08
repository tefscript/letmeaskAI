import {reset, seed} from 'drizzle-seed'; //seed pra limpar db
import { db, sql } from '../db/connection.ts';
import { schema } from '../db/schema/index.ts';


await reset(db, {schema}); //limpa o banco de dados
await seed(db, schema).refine(f => { //usamos o faker pra gerar dados aleatorios
    return{
        rooms: {
            count: 20,
            columns: {
                name: f.companyName(),
                description: f.loremIpsum(),
            }
        }
    }
}); //popula o banco de dados com os dados iniciais

await sql.end()

console.log('Database seeded');