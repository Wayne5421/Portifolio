import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    new TypeIt('.nick-text', {
      strings: ["Welcome"],
      speed: 150,
      loop: false,
      cursor: false,

    }).go();
  }

  finishedWriteWithDelay() {
    setTimeout(() => {
      const element = document.querySelector('.nick-text');
      if (element) {
        element.setAttribute('style', 'text-shadow: 4px 4px 19px rgba(132,0,255,0.67);');
      }
    }, 300);
  }
}
