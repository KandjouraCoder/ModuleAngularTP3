import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActiviteService } from '../services/activite';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActiviteComponent implements OnInit {
  indexActivite!: number;
  nomActivite: string = '';
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public activiteService: ActiviteService
  ) {}

  ngOnInit(): void {
    // Écoute dynamique des changements de paramètres dans l'URL
    this.route.params.subscribe(params => {
      this.indexActivite = Number(params['id']);
      this.chargerActivite();
    });
  }

  chargerActivite(): void {
    if (!isNaN(this.indexActivite) && this.activiteService.objectifs[this.indexActivite] !== undefined) {
      this.nomActivite = this.activiteService.objectifs[this.indexActivite];
    } else {
      this.nomActivite = '';
    }
  }

  // 1.8 Supprimer l'élément et rediriger
  supprimeElem(): void {
    this.activiteService.removeItem(this.indexActivite);
    this.router.navigate(['/']);
  }

  // 1.9 Activer l'édition
  activerEdition(): void {
    this.isEditing = true;
  }

  // 1.9 Sauvegarder les modifications
  sauvegarderElem(): void {
    this.activiteService.updateItem(this.indexActivite, this.nomActivite);
    this.isEditing = false;
  }

  // Retourner à la page d'accueil
  retour(): void {
    this.router.navigate(['/']);
  }
}