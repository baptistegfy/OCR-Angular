export interface Device {
  id: number;
  name: string;
  status: string;
}

export const enum Color {
  green = 'green',
  red = 'red',
  black = 'black',
}

export enum DeviceStatus {
  on = 'on',
  off = 'off',
}
