import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { plainToInstance } from 'class-transformer';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    const users = await this.prisma.user.findMany({
      include: {
        profile: true,
        // profile: {
        //   select: {
        //     id: true,
        //     bio: true,
        //   },
        // },
      },
    });
    console.log(users);
    const u = plainToInstance(
      UserDto,
      users,
      // { strategy: 'excludeAll' },
      // { excludeExtraneousValues: true }, //
    );
    console.log(u);
    return u;
  }

  async createUser(email: string, name: string) {
    return this.prisma.user.create({
      data: {
        email: email,
        name: name,
      },
    });
  }
}
