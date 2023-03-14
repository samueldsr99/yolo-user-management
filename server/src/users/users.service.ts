import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany() {
    return this.prisma.user.findMany({ include: { address: true } });
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { address: true },
    });
  }

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        address: { create: createUserDto.address },
      },
      include: {
        address: true,
      },
    });
  }

  async delete(id: number) {
    try {
      const deletedUser = await this.prisma.user.delete({ where: { id } });
      return deletedUser;
    } catch (err) {
      return null;
    }
  }
}
