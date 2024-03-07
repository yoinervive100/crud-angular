import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HijoComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    validarpadre = new FormGroup({
      name: new FormControl('',Validators.required)
    })

    recibis:any = '';

       recibir(recibir:string){
          this.recibis =recibir;
        }
}