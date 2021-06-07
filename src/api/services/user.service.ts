import { getConnection } from 'typeorm';
import { User } from '../models';

const findUserByEmail = async ({ email }: any): Promise<User | null> => {
  const repo = getConnection().getRepository(User);
  try {
    const user = await repo.findOneOrFail({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

const saveOrUpdate = async (user: User): Promise<User | null> => {
  const repo = getConnection().getRepository<User>(User);

  try {
    const save = await repo.save(user);
    return save;
  } catch (error) {
    return null;
  }
};

export { findUserByEmail, saveOrUpdate };
