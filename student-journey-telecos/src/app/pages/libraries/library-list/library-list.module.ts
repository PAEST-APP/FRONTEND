import { ModalErrorComponent } from './../../../components/modal-error/modal-error.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module';

import { LibraryListPage } from './library-list.page';
import { LibrariesResolver } from './library-list.resolver';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';

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
    component: LibraryListPage,
    resolve: {
      data: LibrariesResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ComponentsModule,
    FontAwesomeModule,
  ],
  providers: [
    LibrariesResolver,
    LibrariesService,
  ],
  declarations: [LibraryListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ModalErrorComponent]
})
export class LibraryListPageModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(fal);
    library.addIconPacks(far);
    library.addIconPacks(fab);
  }
}
