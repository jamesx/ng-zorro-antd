import {
  Directive,
  Input,
  ElementRef,
  HostBinding,
} from '@angular/core';
import { toBoolean } from '../util/convert';

@Directive({
  selector: '[nz-td]'
})
export class NzTdDirective {
  private _checkbox = false;
  private _expand = false;

  _el: HTMLElement;

  @Input()
  @HostBinding(`class.ant-table-selection-column`)
  set nzCheckbox(value: boolean) {
    this._checkbox = toBoolean(value);
  }

  get nzCheckbox(): boolean {
    return this._checkbox;
  }

  @Input()
  @HostBinding(`class.ant-table-row-expand-icon-cell`)
  set nzExpand(value: boolean) {
    this._expand = toBoolean(value);
  }

  get nzExpand(): boolean {
    return this._expand;
  }

  constructor(private _elementRef: ElementRef) {
    this._el = this._elementRef.nativeElement;
  }
}
