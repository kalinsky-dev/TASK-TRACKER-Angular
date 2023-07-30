import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

export class NotFoundComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user!;
  }

}
