import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
} from '@angular/core';
import JSONFormatter from 'json-formatter-js';

export interface ExampleType {
  title: string;
  description: string;
  component: any;
  deps?: string[];
  debug: boolean;
  files: { file: string; filecontent: { default: string }; content?: string }[];
}

@Component({
  selector: 'formly-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
})
export class ExampleViewerComponent implements OnInit, OnDestroy {
  @Input() type: string;
  @Input() exampleData: ExampleType;

  _prevModel: any;

  @ViewChild('demo', { read: ViewContainerRef, static: true }) demoRef: ViewContainerRef;
  @ViewChild('modelPreview', { static: false }) modelPreviewRef: ElementRef;
  demoComponentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  get model() {
    const model = JSON.stringify(this.demoComponentRef.instance.model);
    if (this._prevModel !== model && this.modelPreviewRef && this.modelPreviewRef.nativeElement) {
      this._prevModel = model;
      const formatter = new JSONFormatter(this.demoComponentRef.instance.model, 5, { hoverPreviewEnabled: true });
      this.modelPreviewRef.nativeElement.innerHTML = '';
      this.modelPreviewRef.nativeElement.appendChild(formatter.render());
    }

    return this.demoComponentRef.instance.model;
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);
    this.demoComponentRef = this.demoRef.createComponent(componentFactory);
  }

  ngOnDestroy() {
    if (this.demoComponentRef) {
      this.demoComponentRef.destroy();
    }
  }

}
