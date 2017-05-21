import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase'; // want to access firebase

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServiceProvider {
private data: any; // for grt data from json

public fireAuth:any;
public userProfile: any;



  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    
    



  }


 // get random data
  loadUser(number){
      if(this.data){
        
        return Promise.resolve(this.data);
      }
      return new Promise (resolve => {
        this.http.get('https://randomuser.me/api/?results='+number)//getting data from json url
        .map(res=>res.json())
        .subscribe(data=>{
          this.data=data.results;
          resolve(this.data);
      })
      })
  }

  signUpUser(email:string ,password:string){
    return this.fireAuth.createUserWithEmailAndPassword(email,password)
    .then((newUserCreated)=>{
      //sign in the user
      this.fireAuth.signInWithEmailAndPassword(email,password).then ((
      authonticatedUser)=> {
        //succesfull login,create profile
            this.userProfile.child(authonticatedUser.uid).set({
              email:email
            });
      });
    });
  }

}
