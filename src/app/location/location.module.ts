import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { BreadCrumModule } from '../shared/components/breadcrum/breadcum.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
  },
];

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, BreadCrumModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class LocationModule {}
