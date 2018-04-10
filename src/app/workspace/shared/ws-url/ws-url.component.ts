import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WorkspaceService } from '../../services/workspace.service';

@Component({
  selector: 'ws-url',
  templateUrl: './ws-url.component.html',
})
export class WsUrlComponent implements OnInit, OnDestroy {

  @Input() url = '';

  wsID = '';
  wsID$: any;

  constructor(private service: WorkspaceService) { }

  ngOnInit() {
    this.wsID$ = this.service.workspaceID.subscribe(wsID => {
      this.wsID = wsID;
    })
  }

  ngOnDestroy() {
    this.wsID$.unsubscribe();
  }

}
