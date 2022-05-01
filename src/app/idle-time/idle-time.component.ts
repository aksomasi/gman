import { Component, OnInit } from '@angular/core';
import {DEFAULT_INTERRUPTSOURCES, Idle} from "@ng-idle/core";

@Component({
  selector: 'app-idle-time',
  templateUrl: './idle-time.component.html',
  styleUrls: ['./idle-time.component.scss']
})
export class IdleTimeComponent implements OnInit {
  idleState = "Not started.";
  timedOut = false;
  isLock = true;
  constructor(private idle: Idle) { }

  ngOnInit(): void {
    // sets an idle timeout of 5 seconds, for testing purposes.
    this.idle.setIdle(10);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    this.idle.setTimeout(0);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => ( this.isLock = false));
    this.idle.onTimeout.subscribe(() => {
      this.idleState = "Timed out!";
      this.timedOut = true;
      this.timedOut = true;
    });
    this.idle.onIdleStart.subscribe(val=>{
      this.isLock = true;
    })

  }
  reset(){
    this.isLock = false;
    this.idle.watch();
    this.idleState = "Started.";
    this.timedOut = false;
  }

}
