import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoteConsultationPage } from './note-consultation.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fal);
// library.add(far);
// library.add(fas);
// library.add(fab);

const routes: Routes = [
  {
    path: '',
    component: NoteConsultationPage
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
  declarations: [NoteConsultationPage]
})
export class NoteConsultationPageModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(fal);
    library.addIconPacks(far);
    library.addIconPacks(fab);
  }
}
