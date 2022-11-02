import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-primeros-pasos',
  templateUrl: './primeros-pasos.component.html',
  styleUrls: ['./primeros-pasos.component.css']
})
export class PrimerosPasosComponent implements OnInit {

  guia!: string;
  nombreGuia!: string;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.guia = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

}
