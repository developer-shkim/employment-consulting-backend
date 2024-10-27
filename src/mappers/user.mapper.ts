import { User as UserOrmEntity } from '../database/entities/user.entity';
import { User } from '../entities/user.entity';

export class UserMapper {
  public static convertToEntity(userOrmEntity: UserOrmEntity): User {
    const { id, name, email, password, birthDate } = userOrmEntity;

    return new User({
      id,
      name,
      email,
      password,
      birthDate,
    });
  }

  public static convertToOrmEntity(user: User): UserOrmEntity {
    const { id, name, email, password, birthDate } = user;

    const userOrmEntity = new UserOrmEntity();
    userOrmEntity.id = id;
    userOrmEntity.name = name;
    userOrmEntity.email = email;
    userOrmEntity.password = password;
    userOrmEntity.birthDate = birthDate;

    return userOrmEntity;
  }
}
