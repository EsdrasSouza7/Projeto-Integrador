import organizadorControler from "../src/controlers/OrganizadorControler";

async function main() {
    const userControler = new organizadorControler();

    const user = await userControler.create({
        email: 'bola@email.com',
        senha: '99999',
    });

    console.log(user);
}

main();