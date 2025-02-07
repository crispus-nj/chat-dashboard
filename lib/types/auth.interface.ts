export interface IAuthResponse {
  access_token: string;
  user: IUser;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  is_active: number;
  email_verified_at: any;
  workspaces_id: number;
  created_at: string;
  updated_at: string;
  password_reset_verification: any;
  lastname: string;
  phone: string;
  company: string;
  country: string;
  terms: boolean;
  account_type: string;
  welcome_valid_until: any;
  user_invite_token: any;
  oldid: any;
  invited_by: any;
  deleted_at: any;
  oldwksp: any;
  availability: boolean;
  full_name: string;
  initials: string;
}
