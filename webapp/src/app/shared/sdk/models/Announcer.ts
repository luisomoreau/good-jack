/* tslint:disable */

declare var Object: any;
export interface AnnouncerInterface {
  "id"?: any;
  "name": string;
  "description": string;
  "logo"?: string;
}

export class Announcer implements AnnouncerInterface {
  "id": any;
  "name": string;
  "description": string;
  "logo": string;
  constructor(data?: AnnouncerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Announcer`.
   */
  public static getModelName() {
    return "Announcer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Announcer for dynamic purposes.
  **/
  public static factory(data: AnnouncerInterface): Announcer{
    return new Announcer(data);
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
      name: 'Announcer',
      plural: 'announcers',
      path: 'announcers',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "logo": {
          name: 'logo',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
