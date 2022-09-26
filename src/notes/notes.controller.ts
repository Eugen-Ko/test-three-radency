import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteValidatorPipe } from './createNote.validator';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteDto } from './dto/note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';
import { UpdateNoteValidatorPipe } from './updateNote.validator';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): NoteDto[] {
    return this.notesService.getAll();
  }

  @Get('stats')
  getStats(@Param('stats') stats: string) {
    console.log(stats);
    return this.notesService.getStats();
  }

  @Get(':id')
  getById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): NoteDto | HttpException {
    console.log(id);
    return this.notesService.getById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteById(@Param('id', new ParseUUIDPipe()) id: string): HttpException {
    return this.notesService.deleteById(id);
  }

  @Patch('arch/:id')
  setArchById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.notesService.setArchById(id);
  }

  @Patch('unarch/:id')
  setUnArchById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.notesService.setUnArchById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createEl(
    @Body(new CreateNoteValidatorPipe()) createNote: CreateNoteDto,
  ): NoteDto {
    return this.notesService.createEl(createNote);
  }

  @Patch(':id')
  updateElById(
    @Body(new UpdateNoteValidatorPipe()) updateNote: UpdateNoteDto,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    return this.notesService.updateElById(id, updateNote);
  }
}
