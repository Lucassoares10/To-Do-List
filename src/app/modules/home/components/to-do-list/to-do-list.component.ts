import { Component, DoCheck, OnInit } from '@angular/core';
//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {
  //json parse para converter para json
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngDoCheck(): void {
    //sempre que tiver alguma reatividade o NgDoCheck vai trigar algo
    this.setLocalStorage();

  }

  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
    //O método splice() permite inserir novos elementos e excluir elementos existentes
    // em um array simultaneamente. Para fazer isso você passa pelo menos 3 argumentos, 
    //sendo o segundo que vai especificar o número de ítens a serem excluídos e o 
    //terceiro indicando os elementos a serem inseridos
  }

  public deleteAll() {
    const confirm = window.confirm("Deseja realmente deletar todos os itens?");
    if (confirm) { this.taskList = [] };
  }

  public setEmitTaskList(event: string) {
    //pegando os dados através do event, os dados desse event veio através do outPut e dando um push
    //com os dados que vieram na minha lista.
    this.taskList.push({
      task: event, checked: false
    })

  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if (confirm) {
        this.deleteItem(index);
      }
    }

  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      //Todos os elementos que estiverem checked vão pra baixo dos que não estiverem marcados.
      //sort() O método sort() ordena os elementos do próprio array e retorna o array.
      //A ordenação não é necessariamente estável.
      //A ordenação padrão é de acordo com a pontuação de código unicode.
      // ---------------------Adicionando os valores da lista no localStorage---------------------
      //O local storage so aceita strings, para isso é preciso fazer a conversão para string
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}

