import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkspaceService } from './services/workspace.service';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
})
export class WorkspaceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: WorkspaceService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.service.setWorkspaceID(data.params.wsID);
      });
  }

}
