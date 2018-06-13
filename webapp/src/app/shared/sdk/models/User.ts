/* tslint:disable */
import {
  Donation,
  GeoPoint
} from '../index';

declare var Object: any;
export interface UserInterface {
  "avatar"?: string;
  "loggedAt"?: Date;
  "connected"?: boolean;
  "location"?: GeoPoint;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  donations?: Donation[];
}

export class User implements UserInterface {
  "avatar": string;
  "loggedAt": Date;
  "connected": boolean;
  "location": GeoPoint;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  donations: Donation[];
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  public static factory(data: UserInterface): User{
    return new User(data);
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
      name: 'User',
      plural: 'users',
      path: 'users',
      idName: 'id',
      properties: {
        "avatar": {
          name: 'avatar',
          type: 'string',
          default: 'https://www.shareicon.net/data/128x128/2016/08/04/806683_man_512x512.png'
        },
        "loggedAt": {
          name: 'loggedAt',
          type: 'Date'
        },
        "connected": {
          name: 'connected',
          type: 'boolean'
        },
        "location": {
          name: 'location',
          type: 'GeoPoint'
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
        "id": {
          name: 'id',
          type: 'any'
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
        donations: {
          name: 'donations',
          type: 'Donation[]',
          model: 'Donation',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
