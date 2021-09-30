import { IClassableComponent } from "../../../shared/types/util.types";

type SupportedValues = string | number;

export type OnChange<T extends SupportedValues> = (callbackValue: T) => void;

export enum EInputType {
  NUMBER = "number",
  TEXT = "text"
}

interface IBaseInputProps extends IClassableComponent {
  type: EInputType;
  placeholder?: string;
  onChange: OnChange<any>;
  value: any;
}

interface ITextInputProps extends IBaseInputProps {
  type: EInputType.TEXT,
  onChange: OnChange<string>;
  value: string;
  min?: never;
  max?: never;
}

interface INumberInputProps extends IBaseInputProps {
  type: EInputType.NUMBER,
  onChange: OnChange<number>
  value: number;
  min?: number;
  max?: number;
}

export type IInputProps = ITextInputProps | INumberInputProps;