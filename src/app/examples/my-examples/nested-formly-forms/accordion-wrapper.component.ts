import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-accordion',
  template: `
    <accordion>
        <accordion-group [heading]="to.label">
            <ng-template #fieldComponent></ng-template>
        </accordion-group>
    </accordion>
  `,
})
export class AccordionWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
}
