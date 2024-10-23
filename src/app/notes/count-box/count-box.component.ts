import { Component, OnInit } from '@angular/core';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-count-box',
  templateUrl: './count-box.component.html',
})
export class CountBoxComponent implements OnInit {

  public totalNotes: number = 0;
  public doneNotes: number = 0;
  public inProgressNotes: number = 0;

  constructor(private _notesService: NoteService) { }

  public ngOnInit(): void {
    this._notesService.count$.subscribe(count => {
      this.totalNotes = count.total;
      this.doneNotes = count.done;
      this.inProgressNotes = count.inProgress;
    });
  }
}
