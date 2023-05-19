import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto_list_maison() {
    this.router.navigate(['list-maisons']);
  }

  goto_list_produit() {
    this.router.navigate(['list-produits']);
  }
}
