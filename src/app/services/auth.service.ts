import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from '../modules/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth = inject(Auth);
  firestore = inject(Firestore);

  constructor() { }

  login(user: IUser) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  signup(user: IUser) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  getCurrentUserEmail() {
    return this.auth.currentUser?.email;
  }

  logout() {
    return this.auth.signOut();
  }

}
