import { Service } from "./Service";

export interface FormJobResponse {
  title: string;
  volume: number;
  man_day: number;
  sal_min: number;
  sal_max: number;
  service: Service;
}
