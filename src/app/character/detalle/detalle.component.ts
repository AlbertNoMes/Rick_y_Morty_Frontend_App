import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  detalles: any = null;
  id: any = null;

  constructor(
    private _route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.characterService
      .getById(this.id)
      .subscribe((result) => (this.detalles = result));
  }

  deleteCharacter(): void {
    this.characterService.delete(this.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/tarjeta']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateStatus(status: string) {
    const data = {
      id: this.detalles.id,
      name: this.detalles.name,
      status: status,
      species: this.detalles.species,
      gender: this.detalles.gender,
      origin: this.detalles.origin,
      location: this.detalles.location,
      image: this.detalles.image,
    };

    this.characterService.update(this.detalles.id, data).subscribe(
      (response) => {
        this.detalles.status = status;
        console.log(response);
        this.router.navigate(['/targeta/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
