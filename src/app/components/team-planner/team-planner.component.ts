import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { TeamPlannerService } from 'src/app/services/team-planner.service';

// Interface
import { Team } from 'src/assets/Team';

// PrimeNG
import { SelectItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Confirmation } from 'primeng/api';


@Component({
  selector: 'app-team-planner',
  templateUrl: './team-planner.component.html',
  styleUrls: ['./team-planner.component.css'],
  providers: [
    ConfirmationService, //Confirmationservice is given in provider as it is a service
  ]
})

export class TeamPlannerComponent implements OnInit {

  teams: Team[];

  cols: any[];

  clonedTeam: { [s: string]: Team; } = {};

  releaseNamesList: SelectItem[];
  userNameList: SelectItem[];
  modelList: SelectItem[];
  roleList: SelectItem[];
  availability: SelectItem[];
  confirmDialogVisible = false;
  constructor(private confirmationservice: ConfirmationService, private teamPlannerService: TeamPlannerService) { }

  ngOnInit() {
    this.teamPlannerService.getTeamListFromJson().then((teams) => (this.teams = teams));

    this.cols = [
      { field: 'releaseName', header: 'Release Name' },
      { field: 'userName', header: 'User Name' },
      { field: 'model', header: 'Model' },
      { field: 'role', header: 'Role' },
      { field: 'availability', header: 'Availability' },
    ];

    this.teamPlannerService.getReleaseNameFromJson().then((releaseNamesList) => (this.releaseNamesList = releaseNamesList));
    this.teamPlannerService.getUserNameFromJson().then((userNameList) => (this.userNameList = userNameList));
    this.teamPlannerService.getModelFromJson().then((modelList) => (this.modelList = modelList));
    this.teamPlannerService.getRoleFromJson().then((roleList) => (this.roleList = roleList));
    this.teamPlannerService.getAvailabilityFromJson().then((availability) => (this.availability = availability));


  }

  onRowEditInit(team: Team) {
    console.log("team keyReference: " + team.keyReference);
    this.clonedTeam[team.keyReference] = { ...team };
  }

  onRowEditCancel(team: Team, index: number) {
    this.teams[index] = this.clonedTeam[team.keyReference];
    delete this.clonedTeam[team.keyReference];
  }

  onRowEditDelete(team: Team) {
    //this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});

    this.confirmationservice.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        let index = this.teams.indexOf(team);
        this.teams = this.teams.filter((val, i) => i != index);

      },
      reject: () => {

      }
    });
  }

  onRowEditSave(team: Team) {
    console.log("team userName: " + team.userName);
    team.keyReference = team.releaseName + team.userName + team.model + team.role;
    if (team.keyReference) {

    } else {

    }

    //this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});

  }

  //To add a new row
  newRow() {
    return {
      releaseName: '',
      userName: '',
      model: '',
      role: '',
      availability: '',
    };
  }

}
