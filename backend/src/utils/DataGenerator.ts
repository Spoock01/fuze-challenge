import faker from 'faker';

export default class DataGenerator {
  static getFirstName = (): string => `${faker.name.firstName()} ${faker.name.lastName()}`

  static getCardNumber = (): string => '1471258236931471'

  static getExpirationDate = (): string => '2021-07-03'
}
