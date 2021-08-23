import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/Material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [ HeroComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule],
})
export class HomeModule {}
