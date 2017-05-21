import { Component } from '@angular/core';
//added viewController for close register page
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
//resetpasswordPage added
import{ResetPasswordPage} from '../reset-password/reset-password';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

// function for close the register page
  closeRegisterPage(){
      this.viewCtrl.dismiss();
  }

// push the page resetPassword
  redirectToResetrPage(){

    var allContents ={
          name:'dave partner',
          viewer: 'nice guy',
          randNumber : '123456'

    }
    // pass some values to reset page
      this.navCtrl.push(ResetPasswordPage,{
          userdetails : allContents

      });
      

  }
}
