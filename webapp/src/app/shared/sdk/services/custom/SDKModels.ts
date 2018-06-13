/* tslint:disable */
import { Injectable } from '@angular/core';
import { Association } from '../../models/Association';
import { Donation } from '../../models/Donation';
import { Project } from '../../models/Project';
import { Announcer } from '../../models/Announcer';
import { Campaign } from '../../models/Campaign';
import { User } from '../../models/User';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Association: Association,
    Donation: Donation,
    Project: Project,
    Announcer: Announcer,
    Campaign: Campaign,
    User: User,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
