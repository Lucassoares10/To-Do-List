import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTasklist: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    //Toda vez que o usuario inserir um valor ao addItemTaskList esse evento vai ser ativado e enviar
    //ele para o emitItemTaskList que vai ser disponibilizado para aparecer na lista
    this.addItemTasklist = this.addItemTasklist.trim();
    if (this.addItemTasklist) {
      this.emitItemTaskList.emit(this.addItemTasklist);
      this.addItemTasklist = "";
    }
  }
}
