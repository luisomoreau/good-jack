/* tslint:disable */
import {
  Project
} from '../index';

declare var Object: any;
export interface AssociationInterface {
  "id"?: any;
  "name": string;
  "description": string;
  "logo"?: string;
  projects?: Project[];
}

export class Association implements AssociationInterface {
  "id": any;
  "name": string;
  "description": string;
  "logo": string;
  projects: Project[];
  constructor(data?: AssociationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Association`.
   */
  public static getModelName() {
    return "Association";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Association for dynamic purposes.
  **/
  public static factory(data: AssociationInterface): Association{
    return new Association(data);
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
      name: 'Association',
      plural: 'associations',
      path: 'associations',
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
        projects: {
          name: 'projects',
          type: 'Project[]',
          model: 'Project',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'associationId'
        },
      }
    }
  }
}
