import { Component } from '@angular/core';
// added ModalController for direct page from login page to register page
import { IonicPage,LoadingController, NavController,  NavParams,ModalController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import{ UserServiceProvider} from '../../providers/user-service/user-service';
import {HomePage} from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UserServiceProvider] // get providers as userserviceproviders
})
export class LoginPage {

  public emailField :any;
  public passwordField :any;
  private users=[];
  private usersList : any;

// created a variable modalCtrl
  constructor(private navCtrl: NavController, public navParams: NavParams
  ,private modalCtrl: ModalController
  ,private userServiceProvider:UserServiceProvider
  ,private loadingCtrl:LoadingController) {
    this.emailField="nuwanrathnayaka.c@gmail.com  ";

    this.listOurUsers();
  }

  signUserUp(){
      this.userServiceProvider.signUpUser(this.emailField,this.passwordField)
      .then(authData=>{
        //succesfull

        this.navCtrl.setRoot(HomePage);
      },error =>{
       // alert("Error Login in"+error.message);
      });

      let loader = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      loader.present();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submitLogin(){
    alert("Hello submit");
  }

// function for redirect the register form
  submitRegister(){
      let registerModal= this.modalCtrl.create(RegisterPage);
      registerModal.present();
  }

  listOurUsers(){
    this.userServiceProvider.loadUser(10)
    .then(data=> {
      this.usersList=data;    // stores  the dataa comming form user-service load user save usersList
    })
  }

}
