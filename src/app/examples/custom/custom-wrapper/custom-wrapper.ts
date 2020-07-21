import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    template: `
    <accordion>
        <accordion-group [heading]="to.label">
            <ng-template #fieldComponent></ng-template>
        </accordion-group>
    </accordion>
  `,
})
export class FormlyWrapperAccordionComponent extends FieldWrapper {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
}

@Component({
  template: `
 <div class="card">
   <h3 class="card-header">Its time to party</h3>
   <h5 class="card-header">{{ to.description }}</h5>
   <div class="card-body">
     <ng-container #fieldComponent></ng-container>
   </div>
 </div>
`,
})
export class FormlyWrapperPanelComponent  extends FieldWrapper {
}
