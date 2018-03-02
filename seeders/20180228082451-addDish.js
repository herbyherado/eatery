'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Dishes', [{
          Name: 'Martabak Aceh',
          Price: 30000,
          Cuisine: 'Aceh',
          RestaurantId: 20,
          Image: 'aceh-martabak_aceh',
          createdAt: new Date (),
          updatedAt: new Date ()
        },
        {
          Name: 'Mie Aceh',
          Price: 35000,
          Cuisine: 'Aceh',
          RestaurantId: 19,
          Image: 'aceh-mie_aceh2',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Nasi Goreng Aceh',
          Price: 25000,
          Cuisine: '20',
          RestaurantId: 19 ,
          Image: 'aceh-nasi_goreng_aceh',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Sate Matang',
          Price: 32500,
          Cuisine: 'Aceh',
          RestaurantId: 19,
          Image: 'aceh-sate_matang',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Club Sandwich',
          Price: 37500,
          Cuisine: 'Cafe',
          RestaurantId: 21,
          Image: 'cafe-club_sandwich',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Croissant',
          Price: 15000,
          Cuisine: 'Cafe',
          RestaurantId: 22,
          Image: 'cafe-croissant',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Croissant Sandwich',
          Price: 42500,
          Cuisine: 'Cafe',
          RestaurantId: 21 ,
          Image: 'cafe-croissant2',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Croque Monsieur',
          Price: 50000,
          Cuisine: 'Cafe',
          RestaurantId: 22,
          Image: 'cafe-croque_monsieur',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Red Velvet Cake',
          Price: 42000,
          Cuisine: 'Cafe',
          RestaurantId: 21,
          Image: 'cafe-red_velvet',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Nicoise Salad',
          Price: 60000,
          Cuisine: 'Cafe',
          RestaurantId: 22,
          Image: 'cafe-salad',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Beef Tartar',
          Price: 80000,
          Cuisine: 'French',
          RestaurantId: 12,
          Image: 'french-beef_tartar',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Chicken Confit',
          Price: 89000,
          Cuisine: 'French',
          RestaurantId: 11,
          Image: 'french-chicken_confit',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Escargot',
          Price: 75000,
          Cuisine: 'French',
          RestaurantId: 9,
          Image: 'french-escargot',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Fillet Mignon',
          Price: 125000,
          Cuisine: 'French',
          RestaurantId: 9,
          Image: 'french-fillet_mignon',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Foie Gras',
          Price: 200000,
          Cuisine: 'French',
          RestaurantId: 10,
          Image: 'french-foie_gras',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Ratatouille',
          Price: 890000,
          Cuisine: 'French',
          RestaurantId: 11,
          Image: 'french-ratatouille',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Seared Scallop',
          Price: 130000,
          Cuisine: 'French',
          RestaurantId: 12,
          Image: 'french-scallop',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Souffle',
          Price: 75000,
          Cuisine: 'French',
          RestaurantId: 10,
          Image: 'french-souffle',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Chicken Katsu',
          Price: 80000,
          Cuisine: 'Japanese',
          RestaurantId: 15,
          Image: 'japanese-chicken_katsu',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Curry Rice',
          Price: 60000,
          Cuisine: 'Japanese',
          RestaurantId: 14,
          Image: 'japanese-curry_rice',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Kushiyaki',
          Price: 50000,
          Cuisine: 'Japanese',
          RestaurantId: 15,
          Image: 'japanese-kushiyaki',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Niku Donburi',
          Price: 80000,
          Cuisine: 'Japanese',
          RestaurantId: 15,
          Image: 'japanese-niku_donburi',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Oyako Don',
          Price: 75000,
          Cuisine: 'Japanese',
          RestaurantId: 14,
          Image: 'japanese-oyako_don',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Ramen',
          Price: 50000,
          Cuisine: 'Japanese',
          RestaurantId: 13,
          Image: 'japanese-ramen1',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Sashimi',
          Price: 80000,
          Cuisine: 'Japanese',
          RestaurantId: 14,
          Image: 'japanese-sashimi',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Shabu-shabu',
          Price: 125000,
          Cuisine: 'Japanese',
          RestaurantId: 14,
          Image: 'japanese-shabu',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Sushi',
          Price: 55000,
          Cuisine: 'Japanese',
          RestaurantId: 14,
          Image: 'japanese-sushi1',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Ayam Goreng Kalasan',
          Price: 30000,
          Cuisine: 'Javanese',
          RestaurantId: 17,
          Image: 'javanese-ayam_goreng_kalasan',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Bakso',
          Price: 15000,
          Cuisine: 'Javanese',
          RestaurantId: 17,
          Image: 'javanese-bakso',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Bakso Iga',
          Price: 35000,
          Cuisine: 'Javanese',
          RestaurantId: 17,
          Image: 'javanese-bakso_iga',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Gudeg',
          Price: 25000,
          Cuisine: 'Javanese',
          RestaurantId: 16,
          Image: 'javanese-gudeg',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Sate Buntel',
          Price: 35000,
          Cuisine: 'Javanese',
          RestaurantId: 16,
          Image: 'javanese-sate_buntel',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Sroto',
          Price: 12000,
          Cuisine: 'Javanese',
          RestaurantId: 16,
          Image: 'javanese-sroto',
          createdAt: new Date (),
          updatedAt: new Date ()
        },{
          Name: 'Tongseng',
          Price: 30000,
          Cuisine: 'Javanese',
          RestaurantId: 16,
          Image: 'javanese-tongseng',
          createdAt: new Date (),
          updatedAt: new Date ()
        }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dishes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
