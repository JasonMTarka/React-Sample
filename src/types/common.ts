import Password from "../Components/PassGen/passwordGenLogic";
import { Language, Page } from "../Text/defaults";


export interface Props {
    language: Language
};

export interface ActionInterface {
    type: string
    payload: React.ChangeEvent | Password
};

export interface NavBarProps extends Props {
    updateLanguage: any
    updatePage: any
};

export interface SideBarProps extends Props {
    currentPage: Page
};

export interface SideBarTextInterface {
    EMAIL: string
    HUI_TEXT: string
    HUI_LINK: string
    PAGE_NAME?: string
    DESC?: string
    CODE_TEXT?: string
    CODE_LINK?: string
    COMP_LINK?: string
    COMP_TEXT?: string
};
