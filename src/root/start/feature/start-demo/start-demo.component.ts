import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lt-start',
  standalone: true,
  imports: [],
  template: `
  <p>START</p>
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartComponent {

}
