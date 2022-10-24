import { Component, Input, OnInit } from "@angular/core";
import { HttpService } from "../../../core/services/http.service";

@Component({
  selector: "app-nosotros",
  templateUrl: "./nosotros.component.html",
  styleUrls: ["./nosotros.component.scss"],
})
export class NosotrosComponent implements OnInit {
  @Input() data: any = [];

  constructor(private http: HttpService) {}

  async ngOnInit(): Promise<any> {
    (<any>window).twttr.widgets.load();

    await this.http
      .get("https://ongapi.alkemy.org/api/members")
      .subscribe((response: any) => {
        this.data = response.data;
        console.log(response.data);
      });
  }
}
