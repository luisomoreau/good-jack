/* tslint:disable */

declare var Object: any;
export interface ProjectInterface {
  "id"?: any;
  "title": string;
  "description": string;
  "logo"?: string;
  "status": boolean;
  "goal": number;
  "associationId"?: any;
}

export class Project implements ProjectInterface {
  "id": any;
  "title": string;
  "description": string;
  "logo": string;
  "status": boolean;
  "goal": number;
  "associationId": any;
  constructor(data?: ProjectInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Project`.
   */
  public static getModelName() {
    return "Project";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Project for dynamic purposes.
  **/
  public static factory(data: ProjectInterface): Project{
    return new Project(data);
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
      name: 'Project',
      plural: 'projects',
      path: 'projects',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "title": {
          name: 'title',
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
        "status": {
          name: 'status',
          type: 'boolean'
        },
        "goal": {
          name: 'goal',
          type: 'number'
        },
        "associationId": {
          name: 'associationId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
