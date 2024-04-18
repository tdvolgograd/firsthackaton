import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { provideRouter } from '@angular/router'
import { routes } from './app-routing.module'
import { getAuth, provideAuth } from '@angular/fire/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBdrsWNKKh6s7WeW1mbdnXPJcfzu1Tx_Kk",
  authDomain: "registr-dfaf3.firebaseapp.com",
  projectId: "registr-dfaf3",
  storageBucket: "registr-dfaf3.appspot.com",
  messagingSenderId: "640493256341",
  appId: "1:640493256341:web:7596738f3943e3e4d4e59c",
  measurementId: "G-JQBY4K7NPY"
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() =>initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ]),
  ],
};
