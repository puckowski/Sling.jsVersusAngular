import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenchmarkComponent } from './benchmark/benchmark.component';

const routes: Routes = [
  { path: 'bench', component: BenchmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
