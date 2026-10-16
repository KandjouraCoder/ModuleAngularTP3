import { Component, Inject, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  // Injection du service en public pour y accéder directement dans le template HTML
  constructor(public activiteService: ActiviteService) {}
}