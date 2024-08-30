const { faker } = require('@faker-js/faker');

module.exports = {
  getName() {
    return faker.person.fullName();
  },
  getCountry() {
    return faker.address.country();
  },
  getPhoneNumber() {
    return faker.phone.number();
  },
  getGender() {
    return faker.name.gender();
  }
};