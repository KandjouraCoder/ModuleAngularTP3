import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActiviteService } from '../services/activite';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  btnText: string = 'Ajouter un element';
  objectifText: string = 'Mon objectif';

  // Injections : activiteService en public pour l'utiliser dans le template HTML
  constructor(
    private monRouteur: Router,
    @Inject(ActiviteService) public activiteService: ActiviteService
  ) { }

  ngOnInit(): void {}

  // Getter dynamique lié à la taille du tableau du service
  get nbItems(): number {
    return this.activiteService.objectifs.length;
  }

  ajoutItem(): void {
    if (this.objectifText.trim() !== '') {
      // Ajout dans le tableau centralisé du service
      this.activiteService.objectifs.push(this.objectifText);
      this.objectifText = '';

      // Redirection après 1s
      setTimeout(() => {
        this.monRouteur.navigate(['/about']);
      }, 1000);
    }
  }
}