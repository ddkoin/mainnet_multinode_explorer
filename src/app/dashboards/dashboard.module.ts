import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule} from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProjectCounterComponent } from './dashboard-components/project-counter/project-counter.component';
import { SharedModule } from './../shared/shared.module'

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        Ng2SmartTableModule,
        RouterModule.forChild(DashboardRoutes),
        SharedModule
    ],
	declarations: [
        DashboardComponent,
        ProjectCounterComponent
        
    ]
})
export class DashboardModule { }