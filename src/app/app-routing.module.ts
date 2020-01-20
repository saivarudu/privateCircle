import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from '../app/listing/listing.component';
import { PagenotpresentComponent } from '../app/pagenotpresent/pagenotpresent.component';

const routes: Routes = [
  {
    path: 'savedlists',
    component: ListingComponent
  },
  { path: '',
    redirectTo: '/savedlists',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotpresentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
