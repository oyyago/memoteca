import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento:Pensamento[]=[{
    id:0,
    conteudo:"roupa",
    autoria:"julian",
    modelo:"modelo3"
  },
  {
    id:0,
    conteudo:"roupa",
    autoria:"julian",
    modelo:"modelo2 "
  },
  {
    id:0,
    conteudo:"roupa",
    autoria:"julian",
    modelo:"modelo1"
  },
  {
    id:0,
    conteudo:"roupa",
    autoria:"julian",
    modelo:"modelo3"
  }
];

  constructor() { }

  ngOnInit(): void {
  }
}
