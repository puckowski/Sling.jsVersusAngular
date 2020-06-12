import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBenchmark';

  constructor(private router: Router) {

  }
  
  public onRoute(): void {
    console.time();
    this.router.navigate(['bench']);
    console.timeEnd();

    for (let i = 0; i < 10; ++i) {
      console.time();
      this.router.navigate(['bench']);
      console.timeEnd();
    }
  }
}
