/* tslint:disable */

declare var Object: any;
export interface CampaignInterface {
  "id"?: any;
  "title": string;
  "description": string;
  "logo"?: string;
  "video"?: string;
}

export class Campaign implements CampaignInterface {
  "id": any;
  "title": string;
  "description": string;
  "logo": string;
  "video": string;
  constructor(data?: CampaignInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Campaign`.
   */
  public static getModelName() {
    return "Campaign";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Campaign for dynamic purposes.
  **/
  public static factory(data: CampaignInterface): Campaign{
    return new Campaign(data);
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
      name: 'Campaign',
      plural: 'campaigns',
      path: 'campaigns',
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
        "video": {
          name: 'video',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
