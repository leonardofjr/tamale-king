import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tamale-king-ng';
  showJumbotron = false;

  constructor(private router: Router) {

  }
  ngOnInit() {
    if (this.router.url === '/') {
      this.showJumbotron = true;
    }
  }
}
