import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { EventsCalendarPage } from './events-calendar.page';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { ComponentsModule } from 'src/app/components/components.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// library.add(fal);
// library.add(far);
// library.add(fas);
// library.add(fab);

const routes: Routes = [
  {
    path: '',
    component: EventsCalendarPage
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
    // StoreModule.forRoot({events: EventsReducer.eventsReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    ScrollToModule.forRoot(),
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [EventsCalendarPage]
})
export class EventsCalendarPageModule {}
