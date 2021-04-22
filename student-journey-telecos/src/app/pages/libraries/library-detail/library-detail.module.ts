import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LibraryDetailPage } from './library-detail.page';
import { LibraryDetailResolver } from './library-detail.resolver';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
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
    component: LibraryDetailPage,
    resolve: {
      data: LibraryDetailResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FontAwesomeModule,
    TranslateModule
  ],
  declarations: [LibraryDetailPage],
  providers: [
    LibraryDetailResolver,
    LibrariesService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibraryDetailPageModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(fal);
    library.addIconPacks(far);
    library.addIconPacks(fab);
  }
}
