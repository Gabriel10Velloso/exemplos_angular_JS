import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-markdown-parser',
  templateUrl: './markdown-parser.component.html',
  styleUrls: ['./markdown-parser.component.scss']
})
export class MarkdownParserComponent implements OnInit {
    @ViewChild('comprimento') comprimento: ElementRef;
    teste = 'teste1 \n\t teste2 \f\n\ eu';

    fistNameLength = 0;
    firstName = 'Gabriel';
    fisrtLeterOfFistName = '';

    //  ⏩ String Immutability
    myStr = 'Tlá Mundo'
    
    // ⏩ Bracket Notation to find the lest Character in String
    lestLetar;

    // ⏩ word Blank
    result;
    

  constructor() { }

  ngOnInit() {
      console.log(this.teste);
  }

  tamanho(){
      this.fistNameLength = this.firstName.length;
      this.comprimento.nativeElement.innerHTML = this.fistNameLength;
  }

//   https://www.youtube.com/watch?v=PkZNo7MFNFg 32 minutos video
//   Bracket Notation to find first  Character in String
  bracketNotation(){
    this.fisrtLeterOfFistName = this.firstName[0];
    this.comprimento.nativeElement.innerHTML = this.fisrtLeterOfFistName;
}

//   https://www.youtube.com/watch?v=PkZNo7MFNFg 33.4 minutos video
//   String Immutability --- muda a letra 
stringImmutability() {
    this.myStr = 'Olá Mundo';
    this.comprimento.nativeElement.innerHTML = this.myStr;
}


//   https://www.youtube.com/watch?v=PkZNo7MFNFg 35 minutos video
//   Bracket Notation to find the lest Character in String
bracketNotationLest() {
    this.lestLetar = this.firstName[this.firstName.length - 1];
    this.comprimento.nativeElement.innerHTML = this.lestLetar;
}


//   https://www.youtube.com/watch?v=PkZNo7MFNFg 36.3 minutos video
//   word Blank
wordBlank(mayNoun, myAdjective, myVerb, myAdverb) {
    // console.log(this.wordBlank('dog','ss','ddd','ddd'));
    this.result = '';
    this.result += ' The ' + myAdjective + ' ' + mayNoun + ' ' + myVerb + ' ' + 'to the store ' + myAdverb;
    this.comprimento.nativeElement.innerHTML = this.result;
    console.log(this.wordBlank('dog','big','ran','quickly'));
//    return this.result;
}




}
