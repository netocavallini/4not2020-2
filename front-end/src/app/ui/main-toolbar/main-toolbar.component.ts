import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

    @Input() appName: string // Atributos @Input() servem para receber do compontente pai

  constructor() { }

  ngOnInit(): void {
  }

}
