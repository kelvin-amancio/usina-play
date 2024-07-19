import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  auth: Auth = inject(Auth);
  firestore = inject(Firestore);

  constructor() { }

  login(data: any) {
    return signInWithEmailAndPassword(this.auth, data.email, data.password);
  }

  signup(data: any) {
    return createUserWithEmailAndPassword(this.auth, data.email, data.password);
  }

  getDetails(data: any): Observable<any[]> {
    const usersCollection = collection(this.firestore, 'users');
    return collectionData(usersCollection, { idField: 'id' }) as Observable<any[]>;
  }

}
