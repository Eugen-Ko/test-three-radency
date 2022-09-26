import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { UpdateNoteDto } from './dto/update-note.dto';
import { updateNoteSchema } from './schemas/updateNote.schema';

export class UpdateNoteValidatorPipe
  implements PipeTransform<UpdateNoteDto, UpdateNoteDto>
{
  public transform(
    query: UpdateNoteDto,
    metadata: ArgumentMetadata,
  ): UpdateNoteDto {
    const result = updateNoteSchema.validate(query);

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    } else return result.value;
  }
}
