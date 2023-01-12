import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FolderViewComponent } from './example/simple-list-view-example/folder-view/folder-view.component';
import { SimpleListViewComponent } from './list-view/simple-list-view/simple-list-view.component';
import { ListWithCheckboxComponent } from './list-view/list-with-checkbox/list-with-checkbox.component';
import { ListViewWithCheckboxComponent } from './example/list-view-with-checkbox/list-view-with-checkbox.component';
import { SimpleListWithIconComponent } from './list-view/simple-list-with-icon/simple-list-with-icon.component';
import { ListWithIconComponent } from './example/list-with-icon/list-with-icon.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SimpleListViewComponent,
    FolderViewComponent,
    ListWithCheckboxComponent,
    ListViewWithCheckboxComponent,
    SimpleListWithIconComponent,
    ListWithIconComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
