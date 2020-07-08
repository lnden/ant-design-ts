export default interface IShowResult {
    message: string;
    status: string;
}

export interface IThemeProps {
    [key: string]: { color: string; background: string; }
}
