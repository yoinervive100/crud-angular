import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HijoComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  datos = '';
  bebe = '';
  num:number = 0
  dts:any[] = [];
  guardar = [{id:'1',nombre:'yoiner'}];
  model:any = {};

  traerinfo(nena:string){
    this.dts.push(nena);
    
  }

  eliminar(){
    if (confirm('esta seguro que quiere eliminar')) {
        if (this.dts.length) {
          this.dts.splice(this.num,1);
        }
  }
}
}