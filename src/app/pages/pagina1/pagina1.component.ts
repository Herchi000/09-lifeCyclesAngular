import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements
  OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
  AfterViewInit, AfterViewChecked, OnDestroy {

    nombre: string = 'Emanuel';
    segundos: number = 0;
    timerSubscription!: Subscription

  constructor() { 
    console.log('constructor');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    console.log('Timer limpiado');
  }

  ngOnInit(): void {
   console.log('NgOnInit');
   this.timerSubscription = interval(1000).subscribe(i => {
    this.segundos = i;
    
   })
    
  }

  


  guardar(){

  }

}
