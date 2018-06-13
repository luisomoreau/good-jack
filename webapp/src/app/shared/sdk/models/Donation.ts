/* tslint:disable */

declare var Object: any;
export interface DonationInterface {
  "id"?: any;
  "amount": string;
  "currency": string;
}

export class Donation implements DonationInterface {
  "id": any;
  "amount": string;
  "currency": string;
  constructor(data?: DonationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Donation`.
   */
  public static getModelName() {
    return "Donation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Donation for dynamic purposes.
  **/
  public static factory(data: DonationInterface): Donation{
    return new Donation(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Donation',
      plural: 'donations',
      path: 'donations',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "amount": {
          name: 'amount',
          type: 'string'
        },
        "currency": {
          name: 'currency',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
