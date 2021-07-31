import faker from 'faker';

export default class DataGenerator {
  static getFirstName = (): string => `${faker.name.firstName()} ${faker.name.lastName()}`

  static getCardNumber = (): string => `147125823693147${Math.floor(Math.random() * 10)}`

  static getExpirationDate = (): string => `2021-07-0${Math.floor(Math.random() * 10)}`
}
