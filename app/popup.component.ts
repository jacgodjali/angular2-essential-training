import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
  
  @Input() media;
  @Output() close = new EventEmitter();
  
  index = 0;
  images = [
    "/media/firebug.png",
    "media/smalltall.jpg",
    "media/redemption.jpg",
    "media/hoopers.jpg",
    "media/happy.jpg"
  ]

  isShow() {
    return this.media ? "" : "hidden";
    
  }

  onClose() {
    this.close.emit();
  }

  onPrev() {
    this.index -= 1;
    if (this.index == 0) {
      this.index = 4;
      this.images[this.index];
    }
  }
 
  onNext() {
    this.index += 1;
    if (this.index == 5) {
      this.index = 1;
      this.images[this.index];
    }
  }
}



