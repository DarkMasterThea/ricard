import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface FILTER {
  name: string;
  type: string
}

export interface CARD {
  title: string,
  text: string,
  type: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ricardo';
  filters: FILTER[] = [
    {name: 'Todos', type:'all'},
    {name: 'Autos', type:'car'},
    {name: 'Salud', type:'health'},
    {name: 'Hogar', type:'home'}
  ];

  cards: CARD[] = [
    {
      title: "Electricidad",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      type: "home"
    },
    {
      title: "string",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      type: "health"
    },
    {
      title: "string",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      type: "health"
    },
    {
      title: "string",
      text: "string",
      type: "health"
    },
    {
      title: "string",
      text: "string",
      type: "car"
    },
    {
      title: "string",
      text: "string",
      type: "home"
    }
  ];
  cardsShow = this.cards
  titles : string ="";
  text : string ="";
  type : string ="";
  show: boolean= false;
  submit(){
    console.log("user name is " + this.title)
    this.cards.push({
      title:this.titles,
      text: this.text,
      type: this.type
    })
    this.clear();
  }
  clear(){
    this.titles ="";
    this.text = "";
    this.type = "";
    this.show = true;
  }

  drop(event: CdkDragDrop<FILTER[]>) {
    moveItemInArray(this.filters, event.previousIndex, event.currentIndex);
  }

  filterFunction(item : string){
    if (item==='all'){
      this.cardsShow = this.cards
    }
    else{
      this.cardsShow = this.cards.filter(a=>a.type===item)
    }
  }


}
