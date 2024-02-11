import { ReactNode } from "react";
import { Alerts } from "../types/types";


export interface Iprops {
  type: Alerts;
  icon: ReactNode;
  title: string;
  message?: string;
  children?: ReactNode;
}
