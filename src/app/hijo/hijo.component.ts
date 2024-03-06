import { Component,Output,EventEmitter,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
    @Output() enviardatos = new EventEmitter<string>();
    @Output() info = new EventEmitter<any>();
    @Input() recibirpadre?:string = ''
    envio='';
    enviar = '';
    otro:any = {};
    enviarinfo(){
      this.enviardatos.emit(this.envio); 
      this.enviardatos.emit(this.enviar);
    }
    nuevo(){
      this.enviarinfo();
    }



}
