import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user!;
  }

}
