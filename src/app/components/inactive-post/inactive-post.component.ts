import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {

  posts : Post[] = []

  constructor(private postSrv: PostsService) { 
  
  }

  ngOnInit(): void {
    this.postSrv.getPost().then((posts: Post[]) => {
      this.posts = posts;
  });
  }

  change(id: number, nuovo: boolean ){
    console.log(id);
    console.log(nuovo);
    this.postSrv.modPost(id, nuovo)
  }

}
