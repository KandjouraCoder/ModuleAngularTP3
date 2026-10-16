import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  objectifs: string[] = ['Mon premier objectif', 'Deuxième objectif'];

  constructor() { }

  // 1.8 Supprimer un élément avec splice
  removeItem(index: number): void {
    if (index >= 0 && index < this.objectifs.length) {
      this.objectifs.splice(index, 1);
    }
  }

  // 1.9 Modifier le titre d'une activité
  updateItem(index: number, newTitle: string): void {
    if (index >= 0 && index < this.objectifs.length) {
      this.objectifs[index] = newTitle;
    }
  }
}