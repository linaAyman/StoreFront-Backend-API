// import supertest
import supertest from 'supertest';
//import user type
import { User } from '../../types/user.type';

// import app
import app from '../../server';

//create a request to server (app)
const request = supertest(app);

//TESTS FOR USERS ROUTES
describe('USERS ROUTES TESTS', () => {
  let token: string; //token will be used in other requests

  //1- CREATE USER TEST AND GET THE TOKEN
  it('1-CREATE USER', async () => {
    const newUser: User = {
      firstName: 'Adam',
      lastName: 'Sandler',
      email: 'AdamSandler@gmail.com',
      password: 'adam987543',
    };

    await request
      .post('/api/users')
      .send(newUser)
      .expect((res) => {
        expect(res.status).toBe(201);
        token = res.body;
      });
  });

  //2- GET ALL USERS TEST (INDEX)
  //providing a token
  it('2-GET ALL USERS (With Token)', async () => {
    const res = await request
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  //without providing a token
  it('2-GET ALL USERS (NO Token)', async () => {
    const res = await request.get('/api/users');
    expect(res.status).toBe(401); //unauthorized
  });

  //3- GET USER BY ID TEST (SHOW)
  //providing a token
  it('3-GET USER BY ID (With Token)', async () => {
    const res = await request
      .get('/api/users/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  //without providing token
  it('3-GET USER BY ID(NO Token)', async () => {
    const res = await request.get('/api/users/1');
    expect(res.status).toBe(401); //unauthorized
  });

  //4- UPDATE A USER TEST (TEST)
  //providing a token
  it('4-UPDATE A USER (With Token)', async () => {
    const res = await request
      .patch('/api/users')
      .send({
        id: 1,
        firstName: 'update',
        lastName: 'update',
        email: 'update@gmail.com',
        password: 'update',
      })
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  //Without providing a token
  it('4-UPDATE A USER (NO Token)', async () => {
    const res = await request.patch('/api/users').send({
      id: 1,
      firstName: 'update',
      lastName: 'update',
      email: 'update@gmail.com',
      password: 'update',
    });
    expect(res.status).toBe(401); //unauthorized
  });

  //4-DELETE A USER
  //Without providing a token
  it('5-DELETE A USER (NO Token)', async () => {
    const res = await request.delete('/api/users/1');
    expect(res.status).toBe(401); //unauthorized
  });

  //providing a token
  it('5-DELETE A USER (With Token)', async () => {
    const res = await request
      .delete('/api/users/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });
});
