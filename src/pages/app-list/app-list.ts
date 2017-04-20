import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-app-list',
  templateUrl: 'app-list.html',
})
export class AppList {
  members:Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.members=[
    {id:4,name:"Taobao",platform:"Electronic",Downloads:133,avatar:"assets/2.png"},
    {id:8,name:"Jingdong",platform:"Electronic",Downloads:122,avatar:"assets/3.png"},
    {id:1,name:"Amazon",platform:"Web",Downloads:122,avatar:"assets/4.png"},
    {id:3,name:"Tianmao",platform:"Traditional",Downloads:222,avatar:"assets/5.png"}, 
    {id:5,name:"Alipay",platform:"Mobile",Downloads:199,avatar:"assets/1.png"},   
    ]
}
sortList(type:string)
{
  if(type=="Up")
  {
    this.members.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  }
  else if(type=="Down")
  {
    this.members.sort(function (a, b) {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
      });
  }
    

}




  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppList');
  }

}
