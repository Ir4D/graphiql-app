export interface IFormLoginData {
  email: string;
  password: string;
}

export interface IFormSignupData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface SlideControlsProps {
  isLogin: boolean;
  handleLoginClick: () => void;
  handleSignupClick: () => void;
}
