import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../models/chat';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public alluser: any = [];
  check = sessionStorage.getItem('username');
  chatId: any = 0;
  chatObj: Chat = new Chat();
  public chatData: any = [];

  constructor(private router: Router, private userService: UserService, private chatService: ChatService) { }

  ngOnInit(): void {
    let all = setInterval(() => {

      this.userService.getAll().subscribe((data) => {
        // console.log(data);
        this.alluser = data;
      })
    }, 1000);
  }


 
  

}
