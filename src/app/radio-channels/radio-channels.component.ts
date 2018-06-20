import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-radio-channels',
  templateUrl: './radio-channels.component.html',
  styleUrls: ['./radio-channels.component.scss']
})

export class RadioChannelsComponent implements OnInit {
  RadioplayerShow: boolean = false;
  messages: string;
  frequencyUrl: string = '';
  frequencyUrl1: string = '';
  frequencyUrl2: string = '';
  pause: Boolean = true;
  isPlaying: boolean = false;
  RadioplayerShow1: boolean = false;
  RadioplayerShow2: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  Play(frequency: any) {

    // TODO: frequency should be enum

    //if (this.isPlaying == true)
    //  this.Stop();
    this.RadioplayerShow = true;
    this.RadioplayerShow1 = false;
    this.RadioplayerShow2 = false;
    this.isPlaying = true;

    this.frequencyUrl = "http://www.partyviberadio.com:8000/;listen.pls?sid=1";
    //this.messages = frequency + " ";
  }

  //private Stop() {
  //  this.RadioplayerShow = false;
  // this.frequencyUrl1 = "http://uk6.internet-radio.com:8213/;stream";
  //}

  Play1() {
    this.RadioplayerShow1 = true;
    this.RadioplayerShow = false;
    this.RadioplayerShow2 = false;

    this.frequencyUrl1 = "http://uk6.internet-radio.com:8213/;stream";
  }
  Play2() {
    this.RadioplayerShow2 = true;
    this.RadioplayerShow = false;
    this.RadioplayerShow1 = false;
    this.frequencyUrl2 = "http://uk4.internet-radio.com:8049/;stream";
  }

}




