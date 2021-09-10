import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { BreadcrumModule } from '../shared/components/breadcrum/breadcrum.module';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
  },
];

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BreadcrumModule],
})
export class LocationModule {}
