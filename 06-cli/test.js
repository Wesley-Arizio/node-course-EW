const  {
    deepStrictEqual,
    ok
} = require('assert')
 
const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'Batman',
    poder: 'Dinheiro',
    id: 2
}

const database = require('./database');

describe('Suit manipulação de heroi', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })
    it("Deve pesquisar herois usando arquivos", async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        
        const [response] = await database.listar(expected.id);
        
        deepStrictEqual(response, expected);
    });
    it('deve cadastrar herois usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;

        await database.cadastrar(expected);

        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);
        deepStrictEqual(actual, expected)
    });     
    it('deve remover um heroi por id', async () => {
        const expected = true;
        const response = await database.remover(DEFAULT_ITEM_CADASTRAR.id);

        deepStrictEqual(response, expected);
    });
    it('deve atualizar um heroi por id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: "Aquaman",
            poder: 'Agua',
        };

        const novoHeroi = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: "Aquaman",
            poder: 'Agua',
        }

        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoHeroi);
        const [response] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);

        deepStrictEqual(response, expected);
    });
});