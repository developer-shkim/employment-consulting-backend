import { UserOrmEntity } from '../database/entities/user-orm-entity';
import { User } from '../entities/user.entity';

export class UserMapper {
  public static convertToEntity(userOrmEntity: UserOrmEntity): User {
    return new User(userOrmEntity);
  }

  public static convertToOrmEntity(user: User): UserOrmEntity {
    return UserOrmEntity.create(user);
  }
}
