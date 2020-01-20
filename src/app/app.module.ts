import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './shared/directive/hover.directive';
import { SearchPipe } from './shared/pipe/search.pipe';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { PagenotpresentComponent } from './pagenotpresent/pagenotpresent.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    SearchPipe,
    ListingComponent,
    DetailsComponent,
    HeaderComponent,
    PagenotpresentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
