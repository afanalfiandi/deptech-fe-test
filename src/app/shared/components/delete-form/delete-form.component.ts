import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../../pages/admin/admin.service";
import { COLLECTION } from "../../enums/collection.enum";
import { ToastNotif } from "../../../core/decorators/toast.decorator";
import { MESSAGE } from "../../enums/message.enum";

@Component({
  selector: "app-delete-form",
  imports: [],
  templateUrl: "./delete-form.component.html",
  styleUrl: "./delete-form.component.css",
})
export class DeleteFormComponent implements OnInit {
  collectionName!: string;
  id!: number;

  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    const state = history.state;
    if (state) {
      this.collectionName = state.collectionName;
      this.id = state.id;
    }
  }

  onDelete() {
    if (this.collectionName === COLLECTION.admin) {
      this.adminService.deleteData(this.id).subscribe(() => {
        ToastNotif("success", MESSAGE.deleteSuccess);
        window.history.back();
      });
    }
  }
}
