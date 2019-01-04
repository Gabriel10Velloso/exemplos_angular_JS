import { Component, ElementRef, ViewChild, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('pegandoData') pegandoData: ElementRef;
  @ViewChild('sort') sort: ElementRef;
  @ViewChild('sortFruits') sortFruits: ElementRef;

  // ======== START SORT()
  points;
  fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  edited = false;
  template: string;
  logo = ("../assets/img/1.png");
  logo2 = ("../assets/img/2.png");

 // ======== END SORT()

  constructor() {}

  ngOnInit() {
    this.sortTeste();   // IMPRIMINDO ORDEM DECRESCENTE
    // this.sortFruits2();
  }

  // ===================================== ⏩ START PEGANDO DATA ===================================
  testeData() {
    this.pegandoData.nativeElement.innerHTML = Date();

} // ===================================== ⏩ END PEGANDO DATA ===================================

// ============================================= ⌛ START SORT() =======================================
  // IMPRIMINDO ORDEM DECRESCENTE
  sortTeste() {
      this.points = ['Juntos', 'somos', 'melhores!'];
       this.sort.nativeElement.innerHTML = this.points;
  }

 // IMPRIMINDO ORDEM BUTTON CLICK CRESCENTE
  sortTeste2() {
    this.points = [40, 100, 1, 5, 25, 10];
    this.points.sort(( a, b) => {
      return  a - b;
    });
    this.sort.nativeElement.innerHTML = this.points;
}

  sortFruits2() {
  // this.fruits.sort();
   this.fruits.reverse();
    this.sortFruits.nativeElement.innerHTML = this.fruits;
}

// ============================================= ⌛ END SORT() =======================================  



















}
