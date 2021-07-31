import faker from 'faker';

export default class DataGenerator {

    static getFirstName = (): string => {
        return `${faker.name.firstName()} ${faker.name.lastName()}`
    }

    static getCardNumber = (): string => {
        return "1471258236931471";
    }

    static getExpirationDate = (): string => {
        return "2021-07-03"
    }

}
