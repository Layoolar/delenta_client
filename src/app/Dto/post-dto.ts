export class PostDto {
  id: string | null;
  userId: string | null;
  post: string | null;
  username? : string | null
  userDetails: any
}

export class PostUserDto {
  id: string | null;
  userId: string | null;
  userName: string | null;
  email: string | null;
  lstName: string | null;
}