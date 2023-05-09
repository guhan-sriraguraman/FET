import { Component, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class TestComponent {
@Input() fullName:any;
@Input() secondnName:any;
}