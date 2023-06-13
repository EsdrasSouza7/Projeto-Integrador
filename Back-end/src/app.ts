import UserControler from "./controlers/userControler";

async function main() {
    const userControler = new UserControler();

    const user = await userControler.create({
        email: 'teste@email.com',
        senha: '1234',
    });

    console.log(user);
}

main();