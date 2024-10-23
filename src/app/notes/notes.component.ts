import { Component, OnInit } from '@angular/core';
import { Note } from './notes.types';
import { NoteService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})

export class NotesComponent implements OnInit {

  public allNotes: Note[] = [];
  
  constructor(private _notesService: NoteService)
  { }

  public ngOnInit(): void {
    this.allNotes = this._notesService.getNotesFromLocalStorage(); // Загружаем массив из localStorage
    this.noteServiceUpdate();
  }

  public addNote(description: string): void {
    if (!description) return;

    this.allNotes.unshift({
      description,
      done: false,
      cost: 0,
      currency: '₽',
      createdDate: new Date()
    });
    this._notesService.saveNotesToLocalStorage(this.allNotes)
    this.noteServiceUpdate();

  }

  public deleteNote(index: number): void  {
    this.allNotes.splice(index, 1);

    this.noteServiceUpdate();
    this._notesService.saveNotesToLocalStorage(this.allNotes);
  }

  public getNotes(): Note[] {
    return this.allNotes;
  }

  public saveChanges(toHide: HTMLElement[], toShow: HTMLElement[]) : void{
    toHide.map(el => {
      el.classList.toggle('hidden');
    })

    toShow.map(el => {
      el.classList.toggle('hidden');
    })
    this._notesService.saveNotesToLocalStorage(this.allNotes);

  }

  public changeDoneStatus(index: number) : void {
    this.allNotes[index].done = !this.allNotes[index].done;
    this._notesService.saveNotesToLocalStorage(this.allNotes);
    this.noteServiceUpdate();
  }


  public editCurrency(index: number, newCurrency: '$' | '€' | '₽' ): void {
    this.allNotes[index].currency = newCurrency;
    this._notesService.saveNotesToLocalStorage(this.allNotes);
  }

  public noteServiceUpdate(): void {
    this._notesService.update(
      this.allNotes.length,
      this.allNotes.filter(x => x.done).length,
      this.allNotes.filter(x => !x.done).length
    );
  }

}

