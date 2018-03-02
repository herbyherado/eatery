'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Dishes', [{
    Name: 'Steak',
    Price: 270000,
    Cuisine: 'Barbeque',
    RestaurantId: 5,
    Image: 'bbq_1',
    createdAt: new Date (),
    updatedAt: new Date ()
  },
  {
    Name: 'Grilled Beef Slice',
    Price: 80000,
    Cuisine: 'Barbeque',
    RestaurantId: 5,
    Image: 'bbq_2',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Pork Belly',
    Price: 190000,
    Cuisine: 'Barbeque',
    RestaurantId: 6,
    Image: 'bbq_3',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Grilled Beef Slice',
    Price: 132500,
    Cuisine: 'Barbeque',
    RestaurantId: 6,
    Image: 'bbq_4',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Grilled Tenderloin Slice',
    Price: 90500,
    Cuisine: 'Barbeque',
    RestaurantId: 5,
    Image: 'bbq_5',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Smoked Ribs',
    Price: 200000,
    Cuisine: 'Barbeque',
    RestaurantId: 6,
    Image: 'bbq_6',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Buffet',
    Price: 350000,
    Cuisine: 'Chinese',
    RestaurantId: 7,
    Image: 'chinese_buffet',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Chicken Noodle',
    Price: 80000,
    Cuisine: 'Chinese',
    RestaurantId: 8,
    Image: 'Chinese_chickennoodle',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Hakkau',
    Price: 80000,
    Cuisine: 'Chinese',
    RestaurantId: 8,
    Image: 'Chinese_dumpling',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Buffet',
    Price: 260000,
    Cuisine: 'Chinese',
    RestaurantId: 7,
    Image: 'Chinese_hotpot_3',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Mixed Hot Pot',
    Price: 91000,
    Cuisine: 'Chinese',
    RestaurantId: 7,
    Image: 'Chinese_hotpot',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Sheng Jin Bao',
    Price: 65000,
    Cuisine: 'Chinese',
    RestaurantId: 8,
    Image: 'Chinese_shengjinbao',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Seafood Fetucinni',
    Price: 75000,
    Cuisine: 'Italian',
    RestaurantId: 9,
    Image: 'italian_fettucini',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Chicken Pomodoro',
    Price: 65000,
    Cuisine: 'Italian',
    RestaurantId: 9,
    Image: 'italian_pasta',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Smoked Salmon Linguini',
    Price: 90000,
    Cuisine: 'Italian',
    RestaurantId: 9,
    Image: 'italian_pasta2',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Shrimp Aglio Olio',
    Price: 78000,
    Cuisine: 'Italian',
    RestaurantId: 9,
    Image: 'italian_pasta3',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Vongole',
    Price: 85000,
    Cuisine: 'Italian',
    RestaurantId: 12,
    Image: 'italian_pasta4',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Beef Mayo Pizza',
    Price: 105000,
    Cuisine: 'Italian',
    RestaurantId: 12,
    Image: 'italian_pizza',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Quattro Formaggi',
    Price: 98000,
    Cuisine: 'Italian',
    RestaurantId: 12,
    Image: 'italian_pizza3',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Cheesy Stuffed Crust Pizza',
    Price: 89000,
    Cuisine: 'Italian',
    RestaurantId: 3,
    Image: 'italian_pizza4',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Pizza Romana',
    Price: 76000,
    Cuisine: 'Italian',
    RestaurantId: 3,
    Image: 'italian_pizza5',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Spontini Pizza',
    Price: 30000,
    Cuisine: 'Italian',
    RestaurantId: 3,
    Image: 'italian_spontinipizza',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Mixed Platter',
    Price: 80000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 1,
    Image: 'middleeast_1',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Lamb Biryani',
    Price: 91000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 23,
    Image: 'middleeast_biryani',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Lamb Biryani',
    Price: 115000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 23,
    Image: 'middleeast_biryani2',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Beef Biryani',
    Price: 78000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 23,
    Image: 'middleeast_biryani3',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Biryani Platter',
    Price: 60000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 23,
    Image: 'middleeast_halalguys',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Kasbah',
    Price: 85000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 23,
    Image: 'middleeast_kasbah_2',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Kasbah',
    Price: 30000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 23,
    Image: 'middleeast_kasbah',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Shish Kebab',
    Price: 150000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 23,
    Image: 'middleeast_kebabrice',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Zatar Pita Bread',
    Price: 35000,
    Cuisine: 'Middle Eastern',
    RestaurantId: 23,
    Image: 'middleeast_zatar',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Bakwan Malang',
    Price: 21000,
    Cuisine: 'Street Food',
    RestaurantId: 24,
    Image: 'Snack_bakso',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Chicken Cutlet',
    Price: 35000,
    Cuisine: 'Street Food',
    RestaurantId: 21,
    Image: 'Snack_chicken',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Rice Bowl',
    Price: 21,
    Cuisine: 'Street Food',
    RestaurantId: 2 ,
    Image: 'Snack_ricebowl',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Chicken Cutlet',
    Price: 2,
    Cuisine: 'Street Food',
    RestaurantId: 2 ,
    Image: 'Street_crispychicken',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Frozen Yoghurt',
    Price: 33000,
    Cuisine: 'Street Food',
    RestaurantId: 25,
    Image: 'Street_froyo',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Bubble Gum Gelato',
    Price: 29000,
    Cuisine: 'Street Food',
    RestaurantId: 25,
    Image: 'Street_gelato',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: '3 Scooped Ice Cream',
    Price: 50000,
    Cuisine: 'Street Food',
    RestaurantId: 26,
    Image: 'street_icecream',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Coffee Marshmellow',
    Price: 38000,
    Cuisine: 'Street Food',
    RestaurantId: 21,
    Image: 'street_kopi',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Mango Dessert',
    Price: 50000,
    Cuisine: 'Street Food',
    RestaurantId: 4,
    Image: 'Street_mango',
    createdAt: new Date (),
    updatedAt: new Date ()
  },{
    Name: 'Marshmellow Ice Cream',
    Price: 30000,
    Cuisine: 'Street Food',
    RestaurantId: 26,
    Image: 'Street_marshmallowicecream',
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
