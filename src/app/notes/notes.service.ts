import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { Note } from './notes.types';
import { DoneStatus } from './done.types';

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    // Объявляем Subject
    private _countNotesSubject: BehaviorSubject<DoneStatus> = new BehaviorSubject<DoneStatus>({ total: 0, done: 0, inProgress: 0 });

    public get count$(): Observable<DoneStatus> {
      return this._countNotesSubject.asObservable();
    }
    
    public update(countAllNotes: number, doneNotes: number, inProgressNotes: number): void {
      this._countNotesSubject.next({ total: countAllNotes, done: doneNotes, inProgress: inProgressNotes });
    }

  public saveNotesToLocalStorage(allNotes: Note[]): void {
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
  }

  public getNotesFromLocalStorage(): Note[] {
    const notes = localStorage.getItem('allNotes');
    return notes ? JSON.parse(notes) : []; // Возвращаем пустой массив, если данных нет
  }
}
