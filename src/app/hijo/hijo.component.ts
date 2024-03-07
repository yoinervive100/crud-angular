import { Component,Output,EventEmitter,Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() validarpadre?:any;
  @Output() validarhijo = new EventEmitter<string>();



      age:any = new FormControl('')


  
  agregar(){
    this.validarhijo.emit(this.age);
  }

}
