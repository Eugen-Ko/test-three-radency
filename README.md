# test-three-radency

Опис ендпоінтів:

GET /notes
req:
res: [{
name: string;
date: string;
category: string;
content: string;
createDate: string;
isArch: boolean;
id: string;
},...]

GET /notes/stat
req:
res: [{
category: string,
active: number,
archived: number,
},...]

GET /notes/:id (id типу uuid)
req:
res: {
name: string;
date: string;
category: string;
content: string;
createDate: string;
isArch: boolean;
id: string;
}

DELETE /notes/:id (id типу uuid)
req:
res: {
response: "Element <id> deleted",
status: 200,
message: "Element <id> deleted",
name: "HttpException"
}

PATCH /notes/arch/:id (id типу uuid)
req:
res: {
name: string;
date: string;
category: string;
content: string;
createDate: string;
isArch: boolean;
id: string;
}

PATCH /notes/unarch/:id (id типу uuid)
req:
res: {
name: string;
date: string;
category: string;
content: string;
createDate: string;
isArch: boolean;
id: string;
}

POST /notes
req: {
name: string required
date: string required
category: string required
content: string required
}
res: {
name: string;
date: string;
category: string;
content: string;
createDate: string;
isArch: boolean;
id: string;
}

PATCH /notes/:id (id типу uuid)
req: {
name: string not required
date: string not required
category: string not required
content: string not required
}
res: {
name: string;
date: string;
category: string;
content: string;
createDate: string;
isArch: boolean;
id: string;
}
