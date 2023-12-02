// eslint-disable-next-line max-classes-per-file
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FrameModule } from '@shared/frame/frame.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FrameModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Angular 17 Bootstrap',
      maxAge: 200,
      logOnly: environment.production,
    }),
    // ReactiveConfigModule.forRoot(ConfigVars, { configPath: environment.config }),
    // RuntimeLocalizerModule.forRoot([
    //   {
    //     lang: 'en-US',
    //     path: '/assets/messages/messages.en-US.json',
    //   },
    //   {
    //     lang: 'hu-HU',
    //     path: '/assets/messages/messages.hu-HU.json',
    //   },
    // ]),
  ],
})
export class AppModule {}
