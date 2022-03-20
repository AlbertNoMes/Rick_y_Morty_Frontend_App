import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit {

  /*LISTA DE PJ*/
  tarjetas: any = null;

  constructor(private characterService: CharacterService) {}

  /*METODO RETORNAR DE character.service.ts*/
  ngOnInit(){
    /*SUSCRIBE PARA SUSCRIBIRME A LA RESPUESTA Y EL result LO ASIGNO A LA VARIABLE tarjetas*/
    this.characterService.retornar().subscribe(result => this.tarjetas = result)
  }
}
