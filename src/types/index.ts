export type ReduxError = {
  message?: string;
};

export type LoginInfo = {
  username: string;
  password: string;
  deviceToken?: string;
  deviceType?: string;
  signup?: boolean;
  role?: string;
  
};

export type registerInfo = {
  email: string;
  password: string;
  role?: string;
};

export type VerifyUser = {
  username: string;
  code: string;
};

export interface UserInfo {
  response(arg0: string, response: any);
  _id: string;
  __v: number;
  deviceToken: string;
  loginToken: string;
  isLogin?: boolean;
}

export type ForgotInfo = {
  username: string;
};

export type ConfirmPasswordIfo = {
  username: string;
  code: string;
  newPassword?: string
};

export type VerifyUserInfo = {
  username?: string;
  code?: string;
  password?: string
};

export type AddChildInfo = {
  email?: string;
  password?: string;
  role?: string;
  parent?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  gender?: string;
};

