import Password from "../Components/PassGen/passwordGenLogic";
import { SupportedLanguage } from "../Text/defaults";

export interface Props {
    language: SupportedLanguage
}

export interface PasswordProps extends Props {
    password: Password
}

export interface ActionInterface {
    type: string
    payload: React.ChangeEvent | Password
  }