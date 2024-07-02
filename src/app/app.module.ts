import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './customers/components/navbar/navbar.component';
import {FooterComponent} from './customers/components/footer/footer.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {ToastrService} from "ngx-toastr";
import {HeaderAdminComponent} from "./administrator/components/header-admin/header-admin.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HeaderAdminComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
