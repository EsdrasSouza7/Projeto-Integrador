const axios = require('axios');

axios.get('http://localhost:8080/organizador/3')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

const test = document.getElementById('Test');
test.addEventListener('click', function () {

    axios.post('http://localhost:8080/api/dados', {
        email: 'Test@testEsdras.com',
        senha: '!@#$%'
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
})