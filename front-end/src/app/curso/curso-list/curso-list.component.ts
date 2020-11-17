import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  // Nome da entidade no plural
  cursos : any = [] 

  //Quais Colunas serão exibidas na tabela e em qual ordem
  displayedColumns: String[] = ['nome', 'carga_horaria', 'nivel', 'valor_curso', 'editar', 'excluir']
  
  // Injeção de dependência ou inversão de controle
  constructor(
        private cursoSrv : CursoService,
        private snackBar :MatSnackBar
      ) { }

  async ngOnInit() {
    this.cursos = await this.cursoSrv.listar() // Ambiente ideal para armazenar dados
    console.log(this.cursos)
  }

  async excluir(id: string) {
      if(confirm('Deseja realmente excluir?')) {
          try {
              await this.cursoSrv.excluir(id)
              // 1) Recarregar os dados da tabela
              this.ngOnInit()
              // 2) Feedback para o usuário com mensagem da exclusão
              this.snackBar.open('Item excluido com sucesso.' , 'Entendi.', {
                  duration: 5000
            })
          }
          catch(erro){
              // 3) Dar feedback de erro da exclusão para o usuário
              this.snackBar.open('ERRO: não foi possível excluir este item.' , 'Que pena!', {
                  duration: 5000
              })
              console.log(erro)
          }
      }
  }

}