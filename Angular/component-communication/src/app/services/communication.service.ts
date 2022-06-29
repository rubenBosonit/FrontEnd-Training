import { Injectable } from '@angular/core';
import ChildComponent from '../child/child.component';
import ParentComponent from '../parent/parent.component';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public parentClass!: ParentComponent;
  public childClass!: ChildComponent;
  // private _childText = '';
  // public get childText() {
  //   return this._childText;
  // }
  // public set childText(value) {
  //   this._childText = value;
  // }

  // private _parentText = '';
  // public get parentText() {
  //   return this._parentText;
  // }
  // public set parentText(value) {
  //   this._parentText = value;
  // }
}
