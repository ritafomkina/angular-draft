import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { RootComponent } from './root/root.component';
import { rootConfig } from './root/root.config';

if (environment.production) {
    enableProdMode();
}

/**
 * Schedule app bootstrap to reduce Total Blocking Time (TTB)
 */
setTimeout(async () =>
    bootstrapApplication(RootComponent, rootConfig).catch((err) => console.error(err)),
);
