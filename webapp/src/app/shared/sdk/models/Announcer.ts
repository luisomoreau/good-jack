/* tslint:disable */
import {
  Campaign
} from '../index';

declare var Object: any;
export interface AnnouncerInterface {
  "id"?: any;
  "name": string;
  "description": string;
  "logo"?: string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
  campaigns?: Campaign[];
}

export class Announcer implements AnnouncerInterface {
  "id": any;
  "name": string;
  "description": string;
  "logo": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  campaigns: Campaign[];
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
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        campaigns: {
          name: 'campaigns',
          type: 'Campaign[]',
          model: 'Campaign',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'announcerId'
        },
      }
    }
  }
}
