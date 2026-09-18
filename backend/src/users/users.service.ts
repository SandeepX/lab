import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { User } from './user.entity.js';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  async onModuleInit() {
    await this.seedAdmin();
  }

  private async seedAdmin() {
    const count = await this.users.count();
    if (count > 0) {
      return;
    }
    const password = await bcrypt.hash('admin123', 10);
    await this.users.save(
      this.users.create({
        email: 'admin@lab.local',
        name: 'Lab Admin',
        password,
        role: 'admin',
      }),
    );
  }

  findByEmail(email: string) {
    return this.users.findOne({ where: { email } });
  }

  findById(id: string) {
    return this.users.findOne({ where: { id } });
  }
}