import { Component, AfterViewInit } from "@angular/core";
import { Map, tileLayer, marker } from "leaflet";

@Component({
  selector: "app-leafet-map",
  templateUrl: "./leafet-map.component.html",
  styleUrls: ["./leafet-map.component.scss"],
})
export class LeafetMapComponent implements AfterViewInit {
  private map!: Map;
  // options: {};

  constructor() {}
  private initMap(): void {
    //instanciando el mapa y estableciendo coordenadas de ubicacion inicial
    this.map = new Map("map").setView([51.505, -0.09], 13);

    //capa para visualizar el mapa
    tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    //puntero dentro del mapa para conocer la ubicacion exacta
    marker([51.5, -0.09])
    .addTo(this.map)
    .bindPopup("Our offices here")
    .openPopup();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
