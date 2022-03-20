import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pj } from 'src/app/model/pj.model';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pj: Pj={
    id: 0,
    name: '',
    /*status: '',*/
    species: '',
    gender: '',
    /*origin: '',*/
    location: '',
    image: '',
  };

  submitted = false;

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {}

  saveCharacter(): void{
    const data = {
      id: this.pj.id,
      name: this.pj.name,
      status: 'Alive',
      species: 'nuevo',
      gender: 'nuevo',
      origin: 'nuevo',
      location: 'nuevo',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    };

  this.characterService.add(data).subscribe(
    (response)=>{
      console.log(response);
      this.submitted=true;
      this.router.navigate(['/tarjeta']);
    },
    (error)=>{
      console.log(error);
    }
  );
  }
  newCharacter():void{
    this.submitted=false;
    this.pj={
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: '',
    };
  }
}
