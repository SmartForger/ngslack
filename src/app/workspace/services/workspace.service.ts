import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WorkspaceService {

  workspaceID = new BehaviorSubject('');

  constructor() {
    console.log('workspace service init');
  }

  setWorkspaceID(wsID) {
    this.workspaceID.next(wsID);
  }

}
