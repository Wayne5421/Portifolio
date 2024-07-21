import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit { 




  ngOnInit(): void {
  new TypeIt('.full-stack-text', {
    strings: ["Desenvolvedor FullStack"],
    speed: 150,
    loop: true,
    cursor: false,
  }).go();
}




}
