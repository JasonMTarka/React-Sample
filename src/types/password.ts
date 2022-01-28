import { Props } from "./common";
import Password from "../Components/PassGen/passwordGenLogic";
import { ActionInterface } from "./common";


export type PasswordReducer = [password: Password, dispatch: React.Dispatch<ActionInterface>];

export interface OutputsProps extends PasswordProps {
    copied: boolean
    setCopied: any
};

export interface PassDropdownProps extends PasswordProps {
    name: string
    dispatch: React.Dispatch<ActionInterface>
    renderer: any
};

export interface PasswordProps extends Props {
    password: Password
};

export interface CheckboxesProps extends PasswordProps {
    dispatch: React.Dispatch<ActionInterface>
};

export interface CheckBoxProps extends CheckboxesProps {
    name: string
};

export interface DropdownFieldsProps extends CheckboxesProps {
};
