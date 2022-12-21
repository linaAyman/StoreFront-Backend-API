// import supertest
import supertest from 'supertest';
//import user type and Order type
import { User } from '../../types/user.type';
import { Order } from '../../types/order.type';
// import app
import app from '../../server';

//create a request to server (app)
const request = supertest(app);

//create a user and a token
const dummyUser: User = {
  firstName: 'Dylan',
  lastName: 'OBrien',
  email: 'DylanObrien@gmail.com',
  password: 'dylan1254dfhus5',
};
// const token = jwt.sign(dummyUser, config.jwtKey as string);
let token: string;
const createUser = async () => {
  const userRes = await request.post('/api/users').send(dummyUser);
  token = userRes.body;
  //   console.log('DUMMYUSER STAT: ', userRes.status);
};

//TESTS FOR ORDERS ROUTES
describe('ORDERS ROUTES TESTS', () => {
  //call createUser to create user for userId and to get a token
  createUser();
  //1- CREATE A NEW ORDER
  const testOrder: Order = { status: 'active', userId: 2 };
  //providing a token
  it('1-CREATE AN ORDER (With Token)', async () => {
    const res = await request
      .post('/api/orders')
      .send(testOrder)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(201);
  });

  //without providing a token
  it('1-CREATE AN ORDER (NO Token)', async () => {
    const res = await request.post('/api/orders').send(testOrder);
    expect(res.status).toBe(401); //unauthorized
  });

  //2- GET ALL ORDERS TEST (INDEX)
  //providing a token
  it('2-GET ALL ORDERS (With Token)', async () => {
    const res = await request
      .get('/api/orders')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  //without providing a token
  it('2-GET ALL ORDERS (NO Token)', async () => {
    const res = await request.get('/api/orders');
    expect(res.status).toBe(401); //unauthorized
  });

  //3- GET ORDER BY ID TEST (SHOW)
  //providing a token
  it('3-GET ORDER BY ID (With Token)', async () => {
    const res = await request
      .get('/api/orders/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  //without providing token
  it('3-GET ORDER BY ID(NO Token)', async () => {
    const res = await request.get('/api/orders/1');
    expect(res.status).toBe(401); //unauthorized
  });

  //4-UPDATE ORDER BY ID
  const updatedTestOrder: Order = { id: 1, status: 'complete', userId: 2 };
  //providing token
  it('4-UPDATE AN ORDER (With Token)', async () => {
    const res = await request
      .patch('/api/orders')
      .send(updatedTestOrder)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  //without providing a token
  it('4-UPDATE AN ORDER (NO Token)', async () => {
    const res = await request.patch('/api/orders').send(updatedTestOrder);
    expect(res.status).toBe(401); //unauthorized
  });

  //5-DELETE AN ORDER BY ID
  //Without providing a token
  it('5-DELETE AN ORDER (NO Token)', async () => {
    const res = await request.delete('/api/orders/1');
    expect(res.status).toBe(401); //unauthorized
  });

  //providing a token
  it('5-DELETE AN ORDER (With Token)', async () => {
    const res = await request
      .delete('/api/orders/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });
});
