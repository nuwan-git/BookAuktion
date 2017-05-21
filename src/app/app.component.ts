import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';

import * as firebase from 'firebase';

@Component({
  // templateUrl: '../pages/home/home.html'
  template: '<ion-nav [root]="rootPage"></ion-nav>'
  // templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      
          // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBwSsVeA_OQW_3EvzmJieXHKpSMaoqnVaY",
        authDomain: "fireblogger-7b94c.firebaseapp.com",
        databaseURL: "https://fireblogger-7b94c.firebaseio.com",
        projectId: "fireblogger-7b94c",
        storageBucket: "fireblogger-7b94c.appspot.com",
        messagingSenderId: "970855556529"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged((user) =>{
          if(user){
              this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
         
     });
   
   
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
