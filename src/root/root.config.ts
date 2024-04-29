import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withEnabledBlockingInitialNavigation } from '@angular/router';
import { routes } from './root-shell-routing';
// import {provideEnvironmentNgxMask} from 'ngx-mask';

export const rootConfig: ApplicationConfig = {
  providers: [
      // DI_INTERCEPTORS,
      provideRouter(
        routes,
          withComponentInputBinding(),
          withEnabledBlockingInitialNavigation(),
      ),
      // provideHttpClient(withInterceptors(INTERCEPTORS), withInterceptorsFromDi()),
      // provideAnimations(),
      // provideEnvironmentNgxMask(),
  ],
};
