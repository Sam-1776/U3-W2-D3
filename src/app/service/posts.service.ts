import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  async getPost() {
    return await (await fetch('../assets/db.json')).json();
  }

  async modPost(x: number, y: boolean) {
    return (
      await fetch('../assets/db.json/' + x, {
        method: 'PUT',
        body: JSON.stringify({ "active": y }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  }
}
