import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BoxContent, userData } from '../blog/blog-data';

@Component({
  selector: 'app-blog-comments',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    SharedModule,
    CommonModule
  ],
  templateUrl: './blog-comments.component.html',
  styleUrl: './blog-comments.component.scss'
})
export class BlogCommentsComponent {
  content: BoxContent | undefined;

  constructor(private route:  ActivatedRoute) {}

  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.content = userData.find(item => item.id === id);
  }
}
