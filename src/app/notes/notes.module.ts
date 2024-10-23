import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes.component';
import { CommonModule } from '@angular/common';
import { CountBoxComponent } from './count-box/count-box.component';

@NgModule({
  declarations: [
    NotesComponent,
    CountBoxComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
