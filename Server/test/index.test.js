
const app = require('../src/app');
const session = require('supertest');
const agent = session(app); 
describe('GET /rickandmorty/character/:id', () => {

    it('Responde con status: 200', async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('species');
        expect(response.body).toHaveProperty('gender');
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('origin');
        expect(response.body).toHaveProperty('image');
    });
});

describe('GET /rickandmorty/login', () => {
    it('Valida credenciales correctas', async () => {
        const response = await agent.get('/rickandmorty/login?email=monika@gmail.com&password=123456').expect(200);
        expect(response.body).toEqual({ access: true });
    });
  
    it('Valida credenciales incorrectas', async () => {
        const response = await agent.get('/rickandmorty/login?email=usuarioincorrecto@example.com&password=contraseñaincorrecta').expect(401);
        expect(response.body).toEqual({ access: false });
    });
});

describe('POST /rickandmorty/fav', () => {
    it('Lo que envíes por body debe ser devuelto en un arreglo', async () => {
        const character = { id: 3, name: 'Rick Sanchez', species: 'Human', status: 'Alive' };
        const response = await agent.post('/rickandmorty/fav').send(character).expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toContainEqual(character);
    });

    it('Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente', async () => {
        const character1 = { id: 1, name: 'Rick Sanchez', species: 'Human', status: 'Alive' };
        const character2 = { id: 2, name: 'Morty Smith', species: 'Human', status: 'Alive' };

        // Enviar el primer personaje
        await agent.post('/rickandmorty/fav').send(character1);

        // Enviar el segundo personaje
        const response = await agent.post('/rickandmorty/fav').send(character2).expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toContainEqual(character1);
        expect(response.body).toContainEqual(character2);
    });
});

describe('DELETE /rickandmorty/fav/:id', () => {
    it('Devuelve un arreglo con los elementos previos sin modificar si el ID no existe', async () => {
        for (const id of [1,2,3]) {
            await agent.delete('/rickandmorty/fav/'+id);
        }
        const initialCharacters = [
            { id: 1, name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { id: 2, name: 'Morty Smith', species: 'Human', status: 'Alive' }
        ];
        // Agregar personajes iniciales
        for (const character of initialCharacters) {
            await agent.post('/rickandmorty/fav').send(character);
        }

        // Intentar eliminar un personaje con un ID que no existe
        const response = await agent.delete('/rickandmorty/fav/999').expect(200);
        console.log(response.body);

        // expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toEqual(initialCharacters);
    });
});
