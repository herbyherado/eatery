'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      Name: 'The Halal Guys',
      Address: 'Senayan City, Lantai 5, Jl. Asia Afrika, Senayan',
      City: 'Jakarta',
      Latitude: '-6.2271780112',
      Longitude: '106.7971193790',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: 'Shihlin',
      Address: 'Pondok Indah Mall 2, Lantai 3, Food Court, Jl. Metro Pondok Indah, Pondok Indah',
      City: 'Jakarta',
      Latitude: '-6.2664523605',
      Longitude: '106.7831202596',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: 'Pizza Marzano',
      Address: 'Pondok Indah Mall 2, Lantai Ground, Jl. Metro Pondok Indah, Pondok Indah',
      City: 'Jakarta',
      Latitude: '-6.2648513152',
      Longitude: '106.7830190063',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: 'Fat Mango',
      Address: 'Mall Taman Anggrek, Lantai 2, Jl. Tanjung Duren Timur 2, Tanjung Duren',
      City: 'Jakarta',
      Latitude: '-6.1760599686',
      Longitude: '106.7914341018',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: 'Kintan Buffet',
      Address: 'Gandaria City, Lantai Upper Ground, Jl. Sultan Iskandar Muda, Gandaria',
      City: 'Jakarta',
      Latitude: '-6.2432077275',
      Longitude: '106.7835983634',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: 'Yakinikuya',
      Address: 'Dharmawangsa Square, Jl. Dharmawangsa VI, Dharmawangsa',
      City: 'Jakarta',
      Latitude: '-6.2532055959',
      Longitude: '106.8015963212',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: 'Table8',
      Address: 'Hotel Mulia, Jl. Asia Afrika, Senayan',
      City: 'Jakarta',
      Latitude: '-6.2141189051',
      Longitude: '106.7980685458',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: 'Din Tai Fung',
      Address: 'Plaza Senayan, Lantai 3, Jl. Asia Afrika, Senayan',
      City: 'Jakarta',
      Latitude: '-6.2253045406',
      Longitude: '106.7980685458',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: 'De Luca',
      Address: 'Plaza Senayan, Lantai Ground, Jl. Asia Afrika, Senayan',
      City: 'Jakarta',
      Latitude: '-6.2255405162',
      Longitude: '106.8000114709',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Pand'or`,
      Address: 'Energy Building, Lantai Mezzanine, Jl. Jenderal Sudirman, SCBD',
      City: 'Jakarta',
      Latitude: '-6.2306566296',
      Longitude: '106.8098679185',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Potato Head Jakarta`,
      Address: 'Pacific Place Mall, Lantai Ground, Jl. Jenderal Sudirman, SCBD',
      City: 'Jakarta',
      Latitude: '-6.2256328400',
      Longitude: '106.80900082705',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Le Quartier`,
      Address: 'Jl. Gunawarman No. 34, Senopati',
      City: 'Jakarta',
      Latitude: '-6.2376257956',
      Longitude: '106.8073567003',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Hakata Ikkousha`,
      Address: 'Senayan City, Lantai Lower Ground, Jl. Asia Afrika, Senayan',
      City: 'Jakarta',
      Latitude: '-6.2280365859',
      Longitude: '106.7976434156',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Sushi Tei`,
      Address: 'Senayan City, Lantai 4, Jl. Asia Afrika, Senayan',
      City: 'Jakarta',
      Latitude: '-6.22522615450',
      Longitude: '106.7994455248',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Sushi Hiro`,
      Address: 'Jl. Suryo No. 24, Senopati',
      City: 'Jakarta',
      Latitude: '-6.2352070955',
      Longitude: '106.8134027347',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Sate Khas Senayan`,
      Address: 'Jl. Pakubuwono VI No. 10, Senayan',
      City: 'Jakarta',
      Latitude: '-6.2327267249',
      Longitude: '106.7961490899',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Remboelan`,
      Address: 'Plaza Senayan, Lantai 4, Jl. Asia Afrika, Senayan',
      City: 'Jakarta',
      Latitude: '-6.2254208619',
      Longitude: '106.7992312834',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Sop Buntut Ibu Samino Senayan`,
      Address: 'Jl. Pakubuwono VI No. 11E, Blok M',
      City: 'Jakarta',
      Latitude: '-6.2359936659',
      Longitude: '106.7895676196',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Mie Aceh Seulawah`,
      Address: 'Jl. Bendungan Hilir Raya No. 8, Bendungan Hilir',
      City: 'Jakarta',
      Latitude: '-6.2112611304',
      Longitude: '106.8124824017',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Dapoe Aceh Melayu`,
      Address: 'Plaza Sentral, Jl. Jenderal Sudirman, Sudirman',
      City: 'Jakarta',
      Latitude: '-6.2176339400',
      Longitude: '106.8164416775',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `Ardent Coffee`,
      Address: 'Plaza Senayan, Lantai Basement, Co.Lab, Jl. Asia Afrika, Senayan',
      City: 'Jakarta',
      Latitude: '-6.2248129242',
      Longitude: '106.7989690974',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Name: `BEAU`,
      Address: 'Jl. Cikajang No. 29, Senopati',
      City: 'Jakarta',
      Latitude: '-6.2299680403',
      Longitude: '106.8061299250',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
