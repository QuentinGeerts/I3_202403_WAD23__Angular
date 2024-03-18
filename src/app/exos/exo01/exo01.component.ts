import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrl: './exo01.component.scss'
})
export class Exo01Component {

  fullname: string = "Geerts Quentin";
  email: string = "quentin.geerts@bstorm.be";
  birthdate: Date = new Date("1996-04-03");
  gender: string = "M";
  spokenLanguages: string[] = [ "French", "English" ];
  profilPicture?: string = "https://64.media.tumblr.com/387842eab1edd76cae7411f5e6de1ddb/d23045a0fc36e2c2-db/s250x400/d2b52ae979e334d85ec69a8ae096ef0fe68f96cc.png";

}
