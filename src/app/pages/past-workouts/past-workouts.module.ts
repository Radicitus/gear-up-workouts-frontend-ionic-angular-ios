import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PastWorkoutsPage } from './past-workouts.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { PastWorkoutsPageRoutingModule } from './past-workouts-routing.module';
import {WorkoutItemComponentModule} from "../../components/workout-item/workout-item.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PastWorkoutsPageRoutingModule,
    WorkoutItemComponentModule,
  ],
  declarations: [PastWorkoutsPage],
})
export class Tab3PageModule {}
