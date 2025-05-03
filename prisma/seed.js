import {PrismaClient} from '@prisma/client';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss.js";

const client = new PrismaClient();

async function main() {
    await client.animal.createMany({
        data: [
            {
                nome: 'Leão',
                especie: 'Mamífero',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imagemUrl: 'https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                nome: 'Golfinho',
                especie: 'Mamífero',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imagemUrl: 'https://images.pexels.com/photos/225869/pexels-photo-225869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                nome: 'Sapo',
                especie: 'Anfíbio',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imagemUrl: 'https://images.pexels.com/photos/1101196/pexels-photo-1101196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    })
}
main()
    .then(() => {
        console.log("Successfully Seed");
    })
    .catch(error => {
        console.error(`Error : ${error}`);
        process.exit = 1;
    })
    .finally(() => {
        client.$disconnect()
    });
