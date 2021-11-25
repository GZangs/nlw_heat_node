//yarn prisma migrate dev BUG: https://github.com/prisma/prisma/issues/9184

import { PrismaClient } from ".prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;
