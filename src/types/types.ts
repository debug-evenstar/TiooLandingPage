export interface button {
  height?: number;
  width?: number;
  text1?: string;
  text2?: string;
  image?: string;
  bg?: string;
  onclick: () => void;
  hover?: boolean;
}
export interface InstructionDatatype {
  id: number;

  image: string;
  text: string;
}

export interface BenefitDataTypes {
  id: number;

  h1: string;
  h2?: string;
  p1: string;
  p2?: string;
  img: string;
  rightrender: boolean;
}

export interface GradeDataTypes {
  id: number;

  img: string;
  heading: string;
  text: string;
}
export interface NavDataTypes {
  id: number;
  text: string;
  url?: any;
}

export interface OFFER {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
}
