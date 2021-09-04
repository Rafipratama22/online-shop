'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Products', [
     {
       name: 'Headset',
       price: 80000,
       image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logitechg.com%2Fin-id%2Fproducts%2Fgaming-audio%2Fg433-7-1-surround-sound-gaming-headset.html&psig=AOvVaw2o2-dvMkvhxkamyw9kY6jB&ust=1630766643854000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDvnLqF4_ICFQAAAAAdAAAAABAD',
       stock: 10,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Xiaomi redmi note 8',
       price: 3500000,
       image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logitechg.com%2Fin-id%2Fproducts%2Fgaming-audio%2Fg433-7-1-surround-sound-gaming-headset.html&psig=AOvVaw2o2-dvMkvhxkamyw9kY6jB&ust=1630766643854000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDvnLqF4_ICFQAAAAAdAAAAABAD',
       stock: 20,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Macbook air M1',
       price: 10000000,
       image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnewsmaker.tribunnews.com%2F2021%2F01%2F19%2Fdigadang-jadi-chipset-terbaik-harga-spesifikasi-apple-macbook-air-m1-pro-m1-rilis-di-indonesia&psig=AOvVaw0N8MTd_Jm5SE4So2fTlZXJ&ust=1630766977165000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDL98iG4_ICFQAAAAAdAAAAABAD',
       stock: 5,
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};
