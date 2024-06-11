import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostDto } from "../../Dto/post-dto";
import { PostUserDto } from '../../Dto/post-dto';
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
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']  // Corrected from styleUrl to styleUrls
})
export class BlogComponent implements OnInit {
  token: any
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  content: BoxContent | undefined;
  isLoading: boolean = false;
  postForm: FormGroup;
  postError = false;
  postErrorMessage = '';
  public user!: any;
  posts: PostDto[] = [];
  userPost: PostUserDto[] = [];
  public postUserDto = new PostUserDto();
  comments: UserInfo[] = [];
  public commentDto= new UserInfo();
  public postDto = new PostDto();
  username: string  = 'Anonymous';
  public totalLength: number = 0;
  lify: any = {};
  userName: any;
  public singleUserDetails: any;
  userId: any;
  currentUser!: any;


  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private postService: PostService,
    private authService: AuthService,
    private fb: FormBuilder  
  ) {
    let token: any = this.authService.getToken();
    this.currentUser = this.authService.getUserInfo(token);
   
    this.postForm = new FormGroup({
      post: new FormControl(null, [Validators.required])
    });
    this.postForm = this.fb.group({
      post: ['']
    })
  }

  ngOnInit(): void {
    this.token = this.authService.getToken()
    this.getAllPost();
    this.isAdmin  = this.authService.isAdmin();
    if(this.token) {
      this.getUserById(this.currentUser.userId);
    }
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
              this.getAllPost();
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

    getAllPost(): void {
      this.isLoading = true;
      this.postService.getAllComment().subscribe({
        next: (data) => {
          this.isLoading = false;
          if (data && data.data && Array.isArray(data.data.posts)) {
            if (data.data.posts.length > 0) {
              this.totalLength = data.data.posts.length;
            
              this.posts = data.data.posts.map((res: PostDto) => {
                let name = {userName: "Anonymous"};
                if (res.userDetails && res.userDetails[0]) {
                  name = res.userDetails[0]
                }
                const post = new PostDto();
                post.post = res.post;
                post.username = name.userName; // Assuming `post` is the correct property
                // Map other necessary properties here if needed
    
                return post;
              });
            } else {
              // Handle case where there are no posts
              this.posts = [];
            }
          } else {
            // Handle case where `data.data.posts` is not an array
            console.warn('Unexpected API response structure', data);
            this.posts = [];
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Error fetching comments:', err);
          // Handle error appropriately, e.g., showing an error message
        }
      });
    }
    
    getUserById(user: string) {
      this.postService.getPostById(user).subscribe((res: any) => {
        this.singleUserDetails = res.data; 
      });
    }

  deletePost() {
    this.postService.deletePost(this.currentUser.userId).subscribe(
      () => {
        this.toastr.success('Post deleted successfully');
        this.posts = this.posts.filter(post => post.id !== this.currentUser.userId);
      },
      (error) => {
        this.toastr.error('Error deleting post', error);
      }
    );
  }

banPost() {
  this.authService.banUser(this.currentUser.userId).subscribe(
    () => {
      this.toastr.success("User Banned Successfully");
      this.posts = this.posts.filter(post => post.id !== this.currentUser.userId);
    },
    (error) => {
      this.toastr.error("Error banning user", error);
    }
  );
}
}
