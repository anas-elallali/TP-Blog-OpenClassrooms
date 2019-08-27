import { Subject } from 'rxjs/Subject'
import { Post } from '../models/post.model'

export class PostService{

  postsSubject = new Subject<Post[]>()

  
  private posts: Post[] = [
    {
      title: 'mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIt: -2,
      created_at: new Date()
    },
    {
      title: 'mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIt: 3,
      created_at: new Date()
    },
    {
      title: 'un nouveau post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIt: 0,
      created_at: new Date()
    }
  ];
  
  loadPosts(){
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.loadPosts();
  }

  removePost(index: number) {
      this.posts.splice(index, 1);
      this.loadPosts();
  }

  doNotLovePost(post: Post, index: number) {
    //éviter passage par Réf, on va récupérer l'objet Post puis on le cloner et on modifie la valeur de Love
    let postTmp = Object.assign({}, post);
    postTmp.loveIt--;
    this.posts = Object.assign([], this.posts, {[index]: postTmp});
    this.loadPosts();
  }

  lovePost(post: Post, index: number) {
    //éviter passage par Réf, on va récupérer l'objet Post puis on le cloner et on modifie la valeur de Love
    let postTmp = Object.assign({}, post);
    postTmp.loveIt++;
    this.posts = Object.assign([], this.posts, {[index]: postTmp});
    this.loadPosts();
  }

  

}
