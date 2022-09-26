import { NoteDto } from './../dto/note.dto';

export const aggregatedStat = (data: NoteDto[]) => {
  const uniqCategory: string[] = [
    ...new Set(
      data.map((el) => {
        return el.category;
      }),
    ),
  ];

  const res = uniqCategory.map((cat) => {
    return {
      category: cat,
      active: data.filter((el) => el.category === cat && !el.isArch).length,
      archived: data.filter((el) => el.category === cat && el.isArch).length,
    };
  });

  return res;
};
