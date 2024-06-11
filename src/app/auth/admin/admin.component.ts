import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostDto } from "../../Dto/post-dto";
import { PostService } from '../../services/post.service';
import { UserInfo } from '../../Dto/user-dto';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxContent, adminData } from "../blog/blog-data";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']  // Corrected from styleUrl to styleUrls
})
export class AdminComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  content: BoxContent | undefined;
  isLoading: boolean = false;
  postForm: FormGroup;
  postError = false;
  postErrorMessage = '';
  public user!: any;
  posts: PostDto[] = [];
  comments: UserInfo[] = [];
  public commentDto= new UserInfo();
  public postDto = new PostDto();
  username: string  = 'Anonymous';
  public totalLength: number = 0;
  lify: any = {};
  userName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private postService: PostService,
    private authService: AuthService,
    private fb: FormBuilder  
  ) {
    this.postForm = new FormGroup({
      post: new FormControl(null, [Validators.required])
    });
    this.postForm = this.fb.group({
      post: ['']
    })
  }

  ngOnInit(): void {
    this.getAllComments();
  // Check if user is logged in and get the username
  this.isLoggedIn = this.authService.isLoggedIn();
  if (this.isLoggedIn) {
    this.username = this.authService.getUserName();
  }
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.content = adminData.find(item => item.id === id);
  }

  get f() {
    return this.postForm.controls;
  }

  

  onHttpError(errorResponse: any) {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

    onSubmit() {
      if (this.postForm.valid) {
        this.isLoading = true;
        
        const postUser = this.postForm.getRawValue();
        this.postService.postComment(postUser).subscribe({
          next: (result) => {
            this.isLoading = false;
            if (result.data) {
              this.toastr.success("Post created successfully");
            
              // Optionally, you can refresh comments after posting a new one
              this.getAllComments();
            } else {
              this.toastr.error(result.errorReason, 'Error');
            }
          },
          error: (error) => {
            this.onHttpError(error);
            this.isLoading = false;
          }
        });
      } else {
        this.toastr.error('Form is not valid');
        Object.keys(this.postForm.controls).forEach(key => {
          const controlErrors = this.postForm.get(key)?.errors;
          if (controlErrors != null) {
            console.error('Key control: ' + key + ', errors: ', controlErrors);
          }
        });
      }
    }

    getAllComments(): void {
      this.isLoading = true;
      this.postService.getAllComment().subscribe({
        next: (data) => {
          this.isLoading = false;
          if (data && data.data && Array.isArray(data.data.comments)) {
            if (data.data.comments.length > 0) {
              this.totalLength = data.data.comments.length;
              this.comments = data.data.comments.map((res: any) => {
                const comment = new UserInfo();
                comment.userName = res.comment; // Assuming `post` is the correct property
                // Map other necessary properties here if needed
    
                return comment;
              });
            } else {
              // Handle case where there are no posts
              this.comments = [];
            }
          } else {
            // Handle case where `data.data.posts` is not an array
            console.warn('Unexpected API response structure', data);
            this.comments = [];
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Error fetching comments:', err);
          // Handle error appropriately, e.g., showing an error message
        }
      });
    }

  deletePost(index: number): void {
    const postId = this.posts[index].id; // Assuming each post has an 'id' property

    if (postId) {
      this.postService.deletePost(postId).subscribe(
        response => {
    
          // Remove the post from the local array
          this.posts.splice(index, 1);
        },
        error => {
          console.error('Error deleting post:', error);
        }
      );
    } else {
      console.error('Post ID is null.');
    }
  }
}
