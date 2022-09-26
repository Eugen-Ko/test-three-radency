import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteDto } from './dto/note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

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
  getById(@Param('id') id: string): NoteDto | HttpException {
    console.log(id);
    return this.notesService.getById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteById(@Param('id') id: string): HttpException {
    return this.notesService.deleteById(id);
  }

  @Patch('arch/:id')
  setArchById(@Param('id') id: string) {
    console.log(id);

    return this.notesService.setArchById(id);
  }

  @Patch('unarch/:id')
  setUnArchById(@Param('id') id: string) {
    return this.notesService.setUnArchById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-control', 'none')
  createEl(@Body() createNote: CreateNoteDto): CreateNoteDto[] {
    return this.notesService.createEl(createNote);
  }

  // @Patch()
  // setUnArchById() {}

  // @Patch(':id') //@Put()
  // updateElById(@Body() updateNote: UpdateNoteDto, @Param('id') id: string) {
  //   return 'update ' + id;
  // }
}
