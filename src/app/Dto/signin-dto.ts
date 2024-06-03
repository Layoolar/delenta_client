
// src/app/Dto/sign-up-dto.ts
export interface SignUpDto {
    userName: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    password: string | null;
}

export interface SignInDto {
    email: string | null;
    password: string | null;
}

export interface UpdatePasswordDto {
    password: string | null;
}

export interface VerifyDto {
    email: string | null;
    otp: string | null;
}