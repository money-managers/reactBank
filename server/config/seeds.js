const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        username: 'Juvenile',
        email: 'juvee@gmail.com',
        password: 'password1',
        deposits: [
            {
                name: 'PayDay',
                value: 420.69,
                date: new Date('2021-05-13T10:07:00Z')
            },
            {
                name: 'Record Deal',
                value: 5000,
                date: new Date('2021-05-01T12:15:00Z')
            }
        ],
        expenses: [
            {
                name: 'Whip',
                value: -3500,
                date: new Date('2021-05-10T11:10:00Z')
            }
        ]
    });

    await User.create({
        username: 'Mannie Fresh',
        email: 'GoDj@gmail.com',
        password: 'password2',
        deposits: [
            {
                name: 'Big Tymin',
                value: 9000,
                date: new Date('2021-05-13T10:07:00Z')
            },
            {
                name: 'Stunnin',
                value: 5000,
                date: new Date('2021-05-01T12:15:00Z')
            }
        ],
        expenses: [
            {
                name: 'Ice',
                value: -10000,
                date: new Date('2021-05-10T11:10:00Z')
            }
        ]
    });
    console.log('users seeded');

    process.exit();
});