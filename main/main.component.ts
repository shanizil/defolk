import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
love:string;
line:string;
playlist:string;
tieso:string;
mute:string;
puse:string;
moreinformation:string;
acustic:string;

  constructor() {
      this.love = 'assets/images/love.png'
      this.line = 'assets/images/line.png'
      this.playlist ='assets/images/70 playlist.png'
      this.tieso='assets/images/tieso.png'
      this.mute='assets/images/mute.png'
      this.puse='assets/images/puse.png'
      this.moreinformation='assets/images/more information button.png'
      this.acustic='assets/images/acustic folk playlist.png' 
     }

  ngOnInit() {
  }

}
