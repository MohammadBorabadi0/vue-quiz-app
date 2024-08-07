export interface IQuiz {
  id: number;
  img: string;
  name: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  text: string;
  options: { id: number; label: string; text: string; isCorrect: boolean }[];
}
