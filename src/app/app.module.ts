import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"arrosage-43e17","appId":"1:743359944318:web:eb779ea61f88c520a36a2f","databaseURL":"https://arrosage-43e17-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"arrosage-43e17.firebasestorage.app","apiKey":"AIzaSyD0-CtWh7hjeeJSXb2ychI76jp32l4OqeI","authDomain":"arrosage-43e17.firebaseapp.com","messagingSenderId":"743359944318"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
