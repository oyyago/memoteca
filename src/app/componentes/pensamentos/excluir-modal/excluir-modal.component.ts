import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-modal',
  templateUrl: './excluir-modal.component.html',
  styleUrls: ['./excluir-modal.component.css']
})
export class ExcluirModalComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamanto) => {
      this.pensamento = pensamanto
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }


}
