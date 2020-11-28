const Commander = require('commander');

const Database = require('./database');
const Heroi = require('./heroi');

async function main() {
    Commander
        .version('v1')
        .option('-n --nome [value]', 'Nome do heroi')
        .option('-p --poder [value]', 'Poder do heroi')
        .option('-i --id [value]', 'id do heroi')

        .option('-c --cadastrar', 'Cadastrar um heroi')
        .option('-l --listar', 'listar herois')
        .option('-r --remover', 'remover um heroi por id')
        .option('-a --atualizar [value]', 'Atualizar um heroi por id')

        .parse(process.argv)

    const heroi = new Heroi(Commander);

    try {
        if(Commander.cadastrar){
            const response = await Database.cadastrar(heroi);
            if(!response){
                console.error('Heroi nao cadastrado: ');
                return;
            }

            console.log('Heroi cadastrado com sucesso');
        }

        if(Commander.listar){
            const response = await Database.listar();

            console.log(response)
            return;
        }

        if(Commander.remover){
            const response = await Database.remover(heroi.id);
            if(!response) {
                console.error('Nao foi possivel remover o heroi');
                return;
            }

            console.log("heroi removido com sucesso");
        }

        if(Commander.atualizar){
            const idParaAtualizar = parseInt(Commander.atualizar);

            const dados = JSON.stringify(heroi);
            const heroiAtualizar = JSON.parse(dados);
            const response = await Database.atualizar(idParaAtualizar, heroiAtualizar);

            if(!response) {
                console.error('Não foi possivel atualizar heroi');
                return;
            }

            console.log('Heroi atualizado com sucesso')
        }
    } catch (error) {
        console.error("Error", error)
    }
}

main();