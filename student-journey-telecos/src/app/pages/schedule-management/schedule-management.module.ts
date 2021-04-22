import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScheduleManagementPage } from './schedule-management.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// library.add(fal);
// library.add(far);
// library.add(fas);
// library.add(fab);

const routes: Routes = [
  {
    path: '',
    component: ScheduleManagementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScheduleManagementPage]
})
export class ScheduleManagementPageModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(fal);
    library.addIconPacks(far);
    library.addIconPacks(fab);
  }
}
