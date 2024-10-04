import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
  ],changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

word: string ="Simple card";
title: string = "Simple card 1";
thirdWord: string = "Click me";
num: number = 0;

  onClick(){
    this.num++;
    console.log(this.num);
    if (this.num == 1){
      this.word = "Ouch! Not so hard!";
    } else if(this.num == 2){
      this.title = "Seriously dude?";
    }else if(this.num == 3){
      this.thirdWord = "Wow, this is ridiculous";
    }

  }
}
