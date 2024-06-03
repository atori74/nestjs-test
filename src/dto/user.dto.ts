import { Expose, Type } from 'class-transformer';

export class ProfileDto {
  @Expose({ name: '_profile_id', toPlainOnly: true })
  id: number;

  @Expose({ name: '_bio', toPlainOnly: true })
  bio: string;

  // @Exclude()
  // userId: number;
}

export class UserDto {
  @Expose({ name: '_id', toPlainOnly: true })
  id: number;

  @Expose({ name: '_email', toPlainOnly: true })
  email: string;

  @Expose({ name: '_name', toPlainOnly: true })
  name: string;

  @Type(() => ProfileDto)
  @Expose({ name: '_profile', toPlainOnly: true })
  profile: ProfileDto;

  @Expose({ name: '_id_name', toPlainOnly: true })
  get idName(): string {
    return `${this.id} ${this.name}`;
  }
}
