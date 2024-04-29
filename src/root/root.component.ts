import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'lt-root',
  imports: [RouterOutlet],
  template: `
  <router-outlet></router-outlet>
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {}
