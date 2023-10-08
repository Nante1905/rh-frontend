export interface Auth {
  username: string;
  password: string;
}

export interface AuthResponse {
  OK: boolean;
  token: string;
  err: string;
}
