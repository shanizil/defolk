import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
playlist: string;
csn:string;
sort:string;
rectanglewhite:string;
rectangleblue :string;
volum :string;
volumlogo :string;
rectanglewhite1:string;
rectangleblue1 :string;


  constructor() { 
      this.playlist = 'assets/images/70 playlist.png'
      this.csn = 'assets/images/csn.png'
      this.sort ='assets/images/sort button.png'
      this.rectanglewhite ='assets/images/4.png'
      this.rectangleblue ='assets/images/2.png'
      this.volum='assets/images/volum button.png'
      this.volumlogo='assets/images/volum.png'
      this.rectanglewhite1='assets/images/5.png'
      this.rectangleblue1 ='assets/images/6.png'

}

  ngOnInit() {
  }

}
