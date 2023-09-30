export interface navData {
  id: number;
  url: string;
  text: string;
}
export interface button {
  height?: number;
  width?: number;
  text1?: string;
  text2?: string;
  image?: string;
  bg?: string;
  onclick: () => void;
  variant?: string;
  show?: any;
}
export interface BenefitCustomCardprop {
  title: string;
  desc: string;
  img: string;
  col: number;
}
export interface schoolDataP {
  title: string;
  desc: string;
  id: number;
}
export interface pricingDataP {
  id: number;
  amount: string;
  time: string;
  level: string;
  level_desc: string;
  list: string[];
  availability: string;
  tip: string;
  tip_desc: string;
}
