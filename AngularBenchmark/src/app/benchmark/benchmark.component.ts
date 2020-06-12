import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {

  public version: string = '1.0.0';

  constructor() { }

  ngOnInit(): void {
  }

}
