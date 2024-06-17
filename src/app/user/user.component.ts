import { Component, EventEmitter, Input, Output, input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html', 
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input ({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) users!: {
    id: string;
    avatar: string;
    name: string;
  }
  @Output() select = new EventEmitter<string>();
  // name = input.required<string>();

  get imagePath(){
    return 'assets/users/'+this.users.avatar
  }

  onSelectUser(){
    this.select.emit(this.users.id)
  }
}
