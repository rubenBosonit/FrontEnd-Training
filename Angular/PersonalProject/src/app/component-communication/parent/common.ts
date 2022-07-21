import { Subject } from 'rxjs';

export const childMessenger = new Subject<string>();
export const parentMessenger = new Subject();
