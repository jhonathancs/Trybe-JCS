// let name = 'Milton';
// let lastname = 'Nascimento';
// let nickname = 'bituca';
// let age = 77;
// let bestAlbuns = ['Travessia', 'Clube da esquina', 'Minas']; 

let singer = {
    name: 'Jhonathan',
    lastname: 'Souza',
    nickname: 'jhoncs',
    age: 25,
    bestAlbuns: ['naruto', 'attack on titan', 'villa'],
    cidadeNatural: {
        city: 'portoVelho',
        state: 'Rondonia'
    }
};

console.log('o cantor ' + singer.name + ' ' + singer.lastname + ' possui ' + singer.age + ' anos.' )

console.log('o cantor ' + singer['name'] + ' ' + singer['lastname'] + ' possui ' + singer['age'] + ' anos.' )

console.log(`o cantor ${singer.name} ${singer.lastname} possui ${singer.age} anos.`)

singer['fullName'] = singer.name + ' ' + singer.lastname;

// console.table(singer);

// console.log(`O cantor ${singer.fullName} nasceu no estado de ${singer.cidadeNatural.state}`)

let name = 'jhonathan';
let sobrenome = 'souza';

console.log('o ' + name + ' ' + sobrenome + ' é um cara legal.')