import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container col-sm-12 col-lg-3">
      <div>Welcome to One Vote!!!</div>
      <p>This is your Login Page</p>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'one-vote-web';
}
