import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {
  posts : Post[] = []

  constructor(private postSrv: PostsService) { 
    this.postSrv.getPost().then((posts: Post[]) => {
      this.posts = posts;
  });
  }

  ngOnInit(): void {
  }
  change(id: number, nuovo: boolean ){
    console.log(id);
    console.log(nuovo);
    this.postSrv.modPost(id, nuovo)
  }

}
