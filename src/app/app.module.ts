import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './directive/color.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './comp/sign-in/sign-in.component';
import { MainComponent } from './comp/slack/main/main.component';
import { ChatComponent } from './comp/slack/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule } from './module/matrial/matrial.module';
import { ListComponent } from './comp/slack/list/list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment'
import { StoreMyModuleModule } from './ngrx/store-my-module/store-my-module.module';
import { FirestoreComponent } from './firestore/firestore/firestore.component';
import { FooterComponent } from './navbar/footer/footer.component';
import { FromModule } from './comp/from/from.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorDirective,
    NavbarComponent,
    SignInComponent,
    MainComponent,
    ChatComponent,
    ListComponent,
    FilterPipe,
    FirestoreComponent,
    FooterComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatrialModule,
    FormsModule,
    StoreMyModuleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FromModule,
   


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
