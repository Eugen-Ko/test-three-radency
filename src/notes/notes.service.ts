import { notFound } from './helper/error.helpers';
import { aggregatedStat } from './helper/aggregatedStat.helper';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as MOCKED_NOTES from '../assets/initialNotes.json';

import { v4 as uuidv4 } from 'uuid';
import { NoteDto } from './dto/note.dto';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  private notes: NoteDto[] = MOCKED_NOTES;

  getAll() {
    return this.notes;
  }

  getStats() {
    return aggregatedStat(this.notes);
  }

  getById(id: string) {
    const res = this.notes.find((el) => el.id === id);
    if (res) {
      return res;
    } else throw notFound();
  }

  deleteById(id: string) {
    if (this.notes.find((el) => el.id === id)) {
      this.notes = this.notes.filter((note) => note.id !== id);
      return new HttpException(`Element ${id} deleted`, HttpStatus.OK);
    } else throw notFound();
  }

  setArchById(id: string) {
    if (this.notes.find((note) => note.id === id)) {
      this.notes = this.notes.map((note) => {
        return note.id !== id ? note : { ...note, isArch: true };
      });
      return this.notes.find((note) => note.id === id);
    } else throw notFound();
  }

  setUnArchById(id: string) {
    if (this.notes.find((note) => note.id === id)) {
      this.notes = this.notes.map((note) => {
        return note.id !== id ? note : { ...note, isArch: false };
      });
      return this.notes.find((note) => note.id === id);
    } else throw notFound();
  }

  createEl(createNote: CreateNoteDto) {
    this.notes.push({ ...createNote, id: uuidv4() });
    return this.notes;
  }
}
