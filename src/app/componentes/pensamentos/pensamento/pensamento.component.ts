import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento:Pensamento={
    id:0,
    conteudo:"roupa",
    autoria:"julian",
    modelo:"modelo3"
  }

  tamanhoDiv():string{
    if(this.pensamento.conteudo.length>=250){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
