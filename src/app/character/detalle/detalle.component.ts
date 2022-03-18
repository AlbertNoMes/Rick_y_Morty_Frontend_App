import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalles: any = null;
  id: any = null;

  constructor(private _route: ActivatedRoute, private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.characterService
      .getById(this.id)
      .subscribe(result => this.detalles = result)
  }
}
