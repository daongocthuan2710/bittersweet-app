// Libraries
import * as bcrypt from 'bcrypt';

// Libs
import prisma from '@/libs/prisma';

interface RequestBody {
  name: string;
  email: string;
  role: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      role: body.role,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;

  return new Response(JSON.stringify(result));
}
