export interface User {
    userId: string;
    email: string;
}

export interface AuthUser extends User {
    access_token: string;
}

export interface AuthCredentials {
    email: string;
    password: string;
}

export interface RegisterData extends AuthCredentials {
    username: string;
}