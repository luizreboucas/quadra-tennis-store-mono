import { CreateUserDTO } from './DTO/CreateUserDTO';
import { UpdateUserDTO } from './DTO/UpdateUserDTO';
import UserRepository from './userRepository';
import { Crypt } from 'src/utils/crypt';

export default class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  public create = async (data: CreateUserDTO) => {
    const hashedPassword = await Crypt.hashPassword(data.password);
    data.password = hashedPassword;
    return await this.userRepository.create(data);
  };

  public getAll = async () => {
    return await this.userRepository.getAll();
  };

  public getOneById = async (id: number) => {
    return await this.userRepository.getOneById(id);
  };

  public delete = async (id: number) => {
    return await this.userRepository.delete(id);
  };

  public update = async (id: number, newData: UpdateUserDTO) => {
    return await this.userRepository.update(id, newData);
  };

  public getByEmail = async (email: string) => {
    return await this.userRepository.getByEmail(email);
  };
}
