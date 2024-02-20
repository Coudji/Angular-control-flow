import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control-flow';
  movies = [{
    title: "L'attaque des bananes tueuses",
    releaseYear: 2020,
    genre: "parodie",
  }, {
    title: "Loutre",
    releaseYear: 2022,
    genre: "animal",
  }, {
    title: "Les aventures d'amaury",
    releaseYear: 1997,
    genre: "développement",
  },
  {
    title: "La dernière des loutres",
    releaseYear: 2082,
    genre: "catastrophe",
  }];

  evilOtters = [];

  viewMode: 'kanban' | 'list' | 'default' = 'default';

  isVisible = false;
  isRandomVisible = false;

  books =  [
    {
      "titre": "Alice au pays des merveilles",
      "auteur": "Lewis Carroll",
      "annee_publication": 1865,
      "genre": "Fantasy",
      "langue": "Français"
    },
    {
      "titre": "Robinson Crusoé",
      "auteur": "Daniel Defoe",
      "annee_publication": 1719,
      "genre": "Aventure",
      "langue": "Français"
    },
    {
      "titre": "Orgueil et Préjugés",
      "auteur": "Jane Austen",
      "annee_publication": 1813,
      "genre": "Romance",
      "langue": "Français"
    },
    {
      "titre": "1984",
      "auteur": "George Orwell",
      "annee_publication": 1949,
      "genre": "Dystopie",
      "langue": "Anglais"
    },
    {
      "titre": "Le Seigneur des anneaux",
      "auteur": "J.R.R. Tolkien",
      "annee_publication": 1954,
      "genre": "Fantasy",
      "langue": "Anglais"
    },
    {
      "titre": "Crime et Châtiment",
      "auteur": "Fiodor Dostoïevski",
      "annee_publication": 1866,
      "genre": "Roman psychologique",
      "langue": "Russe"
    },
    {
      "titre": "Les Misérables",
      "auteur": "Victor Hugo",
      "annee_publication": 1862,
      "genre": "Historique",
      "langue": "Français"
    },
    {
      "titre": "L'Étranger",
      "auteur": "Albert Camus",
      "annee_publication": 1942,
      "genre": "Philosophique",
      "langue": "Français"
    }
  ]

  toggleVisibility(){
    this.isRandomVisible = false;
    this.isVisible = !this.isVisible
  }

  toggleRandomVisibility(){
    this.isVisible = false;
    this.isRandomVisible = !this.isRandomVisible;
    if(this.books.length > 0){
      this.randomiseBook();
    }
  }

  randomiseBook(){
    this.randomBook = this.books[Math.floor(Math.random() * this.books.length)];
  }

  randomBook = this.books[Math.floor(Math.random() * this.books.length)];

  deleteBook(index:number){
    this.books.splice(index,1);
  }
}
