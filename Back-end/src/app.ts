import UserControler from "./controlers/userControler";

async function main() {
    const userControler = new UserControler();

    const user = await userControler.create({
        email: 'bola@email.com',
        senha: '99999',
    });

    console.log(user);
}

main();