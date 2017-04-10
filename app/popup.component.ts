import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
  
  @Input() media;
  @Output() close = new EventEmitter();
  
 

  isShow() {
    return this.media ? "" : "hidden";
    
  }

  onClose() {
    this.close.emit();
  }


}



