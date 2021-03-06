import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';
import { TestComponent } from './../test.component';
@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

  score;
  x;
  words;
  answer;
  questions;
  constructor(
    private rf:ReadfileService,
    private tc:TestComponent
  ) { 
    this.x=0;
    this.score=0;
    this.words=rf.readTextFile("assets/test/spelling").split("\n");
    this.questions= new Array();
    this.questions[0]=this.words[Math.floor((Math.random() * 296))];
    this.questions[1]=this.words[Math.floor((Math.random() * 296))];
    this.questions[2]=this.words[Math.floor((Math.random() * 296))];
    this.questions[3]=this.words[Math.floor((Math.random() * 296))];
    this.questions[4]=this.words[Math.floor((Math.random() * 296))];
    console.log(this.questions);
  }
  speak(ms){
    let msg = new SpeechSynthesisUtterance(ms);
    window.speechSynthesis.speak(msg);
  }
  submit(){
    if(this.questions[this.x]==this.answer){
      this.tc.writingscore++;
      this.tc.totalscore++;
    }
    this.answer="";
    if(this.x==4){
      this.tc.writingstatus=false;
      this.tc.bkstatus=true;
    }
    this.x++;
  }
  ngOnInit() {
  }
}