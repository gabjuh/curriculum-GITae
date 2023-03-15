import { IContent } from './Tree';

export interface IYear {
  textColor: string;
  content: IContent;
  y: number;
  i?: number;
}

export interface IText {
  textColor: string;
  content: IContent;
  y: number;
  horisontalPosition?: number;
  i?: number;
  categoryColor: string;
}