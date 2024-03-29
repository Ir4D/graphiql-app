export interface Props {
  type: Type;
  style: CSSModuleClasses;
}

export interface Type {
  kind: string;
  name: null | string;
  ofType: ofType | null;
}

export interface ofType {
  kind: string;
  name: string;
  ofType: null | ofType;
}
