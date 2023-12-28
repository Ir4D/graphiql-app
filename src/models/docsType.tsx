export interface Props {
  type: Type;
}

interface Type {
  kind: string;
  name: null | string;
  ofType: ofType | null;
}

interface ofType {
  kind: string;
  name: string;
  ofType: null | ofType;
}
