import { HttpException, HttpStatus } from '@nestjs/common';

export const notFound = () => {
  return new HttpException('Element not found', HttpStatus.NOT_FOUND);
};
