import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { createNoteSchema } from './schemas/createNote.schema';

export class CreateNoteValidatorPipe
  implements PipeTransform<CreateNoteDto, CreateNoteDto>
{
  public transform(
    query: CreateNoteDto,
    metadata: ArgumentMetadata,
  ): CreateNoteDto {
    const result = createNoteSchema.validate(query);

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    } else return result.value;
  }
}
