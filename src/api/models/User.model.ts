import * as bcrypt from 'bcrypt';
import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './Role.model';

export enum UserStatus {
  Inactive = 'INACTIVE',
  Active = 'ACTIVE',
  Block = 'BLOCK',
  New = 'NEW',
}

@Entity('User')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'Name is required' })
  @Column()
  name: string;

  @Column()
  @IsNotEmpty({ message: 'Lastname is required' })
  lastname: string;

  @Column()
  @IsNotEmpty({ message: 'CPF is required' })
  document: string;

  @Column('varchar', { length: 255, name: 'email' })
  @IsEmail(
    { allow_display_name: true },
    {
      message: 'The email is not valid',
    }
  )
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @Column('varchar', { length: 255, name: 'password' })
  password: string;

  @Column('tinyint', { default: 0 })
  @IsNotEmpty({ message: 'Term and conditions is required' })
  termsAndConditions?: number;

  @Column('int', { default: 1 })
  roleId!: number;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column('varchar', { default: UserStatus.New })
  @IsNotEmpty({
    message: 'The user status is required',
  })
  status: UserStatus;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'createDate',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createDate: string;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updateDate',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updateDate: string;

  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await User.hashPassword(this.password);
  }

  public static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
  }

  checkIfUnEncryptedPasswordIsValid(unEncryptedPassword: string): boolean {
    return bcrypt.compareSync(unEncryptedPassword, this.password);
  }
}
