const app = require('../src/app');
const session = require('supertest');
const agent = session(app);


describe("Test de RUTAS", ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async ()=>{
             await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("status");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        });
        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/4656859').expect(500);
        });
    });
    describe("GET /rickandmorty/login", ()=>{
        it('La informacion de login es correcta', async ()=>{
            const response = (await agent.get('/rickandmorty/login?email=mantunez@soyhenry.com&password=asd123')).body
            expect(response.access).toEqual(true)
        });

        it('La informacion de login es incorrecta', async ()=>{
            const response = (await agent.get('/rickandmorty/login?email=pepito@soyhenry.com&password=123')).body
            expect(response.access).toEqual(false)
        });
    });

    describe("POST /rickandmorty/fav", ()=>{
        const character1 = {id: '1', name: 'Matias'}
        const character2 = {id: '2', name: 'Maximiliano'}

        it('Devuelve el elemento enviado por body', async ()=>{
            const response = (await agent.post('/rickandmorty/fav').send(character1)).body;
            expect(response).toContainEqual(character1)
        });
        it('Devuelve el previo elemento enviado y el actual', async ()=>{
            const response = (await agent.post('/rickandmorty/fav').send(character2)).body;
            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        });
    });

    describe("DELETE /rickandmorty/fav/:id", ()=>{
        const character1 = {id: '1', name: 'Matias'}
        const character2 = {id: '2', name: 'Maximiliano'}

        it('Devuelve el arreglo correspondiente si no se elimina ningun personaje', async ()=>{
            const response = (await agent.delete('/rickandmorty/fav/8456')).body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);
        });
        it('Elimina correctamente al personaje que se especifica por ID', async ()=>{
            const response = (await agent.delete('/rickandmorty/fav/1')).body;
            expect(response).toContainEqual(character1);
        });
    });
});