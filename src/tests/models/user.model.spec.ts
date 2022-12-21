//import user type and model
import { User } from '../../types/user.type';
import { UserModel } from '../../models/user.model';

//create a user model instance
const userModel = new UserModel();

describe('USER MODEL TESTS', () => {
  //INSERT INTO
  it('1-INSERT NEW USER INTO DATABASE', async () => {
    const newUser: User = {
      firstName: 'Ryan',
      lastName: 'Renyolds',
      email: 'RyanReynolds@gmail.com',
      password: 'ryan987543',
    };
    const result = await userModel.createUser(newUser);
    expect(result).toBeTruthy();
    expect(result.email).toEqual('RyanReynolds@gmail.com');
  });

  //SELECT *
  //let id: string;
  it('2-SELECT * FROM DATABASE', async () => {
    const result = await userModel.getAllUsers();
    expect(result).toBeTruthy();
  });

  //SELECT WHERE
  it('3-SELECT USERS BY ID', async () => {
    const result = await userModel.getUserById(3);
    expect(result).toBeTruthy();
  });

  //UPDATE WHERE
  it('UPDATE USER DATA IN DATABASE', async () => {
    const updatedUser: User = {
      id: '3',
      firstName: 'Ryan',
      lastName: 'Gosling',
      email: 'RyanGosling@gmail.com',
      password: 'ryan987543',
    };
    const result = await userModel.updateUser(updatedUser);
    expect(result).toBeTruthy();
    expect(result.email).toEqual('RyanGosling@gmail.com');
  });

  //DELETE WHERE
  it('4-DELETE A USER BY ID', async () => {
    const result = await userModel.deleteUser(3);
    expect(result).toBeTruthy();
  });
});
