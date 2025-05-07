import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-tables",
  imports: [],
  templateUrl: "./tables.component.html",
  styleUrl: "./tables.component.css",
})
export class TablesComponent {
  @Input() data: any;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  onEditData(data: any) {
    this.edit.emit(data);
  }

  onDeleteData() {
    this.delete.emit();
  }

  get rowValues(): any[] {
    return Object.values(this.data.data);
  }
}
