import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
   
  }
  math: any;
  science:any;
  english:any;
  myClass : string= ''
    result="";


    checkResult(){

      if(this.math<=35 || this.science<=35 || this.english<=35){
    this.result="sorry! you are failed"
       this.myClass = 'fail'
      }
    else if(this.math>=75 && this.science>=75 && this.english>=75){
    this.result="congratulation! you have got distinction"
   this.myClass = 'dist'
    }
    else{
      this.result="congratulation! you have passed this exam"
     this.myClass ='pass'
    }
    
      }
  
}