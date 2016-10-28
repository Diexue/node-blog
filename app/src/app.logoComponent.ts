import {Component} from '@angular/core';

@Component({
  selector: 'logo',
  template: '<div class="nb-header"><h2>{{logo}}</h2></div>'
})
export class LogoComponent {
    logo = '不服咬我呀';
}
