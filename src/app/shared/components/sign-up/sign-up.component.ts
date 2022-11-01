import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private auth: AngularFireAuth) {
    console.log(auth)
  }

  ngOnInit(): void {
  }
  async signUp() {
    try {
      let userCred = await this.auth.createUserWithEmailAndPassword(
        this.email, this.password
      );
      console.log(userCred);
      
    } catch (err) {
      console.log(err);
    }
  }
}
