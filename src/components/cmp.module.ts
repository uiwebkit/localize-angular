import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {LangMenuCustomComponent} from "./lang-menu-custom/lang-menu-custom.component";

@NgModule({
  declarations: [LangMenuCustomComponent],
  exports: [LangMenuCustomComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CmpModule { }
