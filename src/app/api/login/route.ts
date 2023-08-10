 // Libraries
import { NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';

// Libs
import prisma from '@/libs/prisma';

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  const isEqualPassword = await bcrypt.compare(
    body.password,
    user?.password || '',
  );

  if (user && isEqualPassword) {
    const { password, ...userWithoutPass } = user;

    return NextResponse.json(userWithoutPass);
  } else {
    return NextResponse.json(null);
  }
}
