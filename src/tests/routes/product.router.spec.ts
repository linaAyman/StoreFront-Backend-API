// import supertest
import supertest from 'supertest';
//import user type and Product type
import { User } from '../../types/user.type';
import { Product } from '../../types/product.type';
import config from '../../config/config';
// import app
import app from '../../server';
//jwt to simulate a token
import jwt from 'jsonwebtoken';

//create a request to server (app)
const request = supertest(app);

//create a user and a token
const dummyUser: User = {
  firstName: 'Dylan',
  lastName: 'OBrien',
  email: 'DylanObrien@gmail.com',
  password: 'dylan1254dfhus5',
};
const token = jwt.sign(dummyUser, config.jwtKey as string);

//TESTS FOR PRODUCTS ROUTES
describe('PRODUCTS ROUTES TESTS', () => {
  //1- CREATE A NEW PRODUCT
  const testProd: Product = { name: 'headphones', price: 250 };
  //providing a token
  it('1-CREATE A PRODUCT (With Token)', async () => {
    const res = await request
      .post('/api/products')
      .send(testProd)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(201);
  });

  //without providing a token
  it('1-CREATE A PRODUCT (NO Token)', async () => {
    const res = await request.post('/api/products').send(testProd);
    expect(res.status).toBe(401); //unauthorized
  });

  //2-GET ALL PRODUCTS (INDEX)
  it('2-GET ALL PRODUCTS', async () => {
    const res = await request.get('/api/products');
    expect(res.status).toBe(200);
  });

  //3-GET PRODUCT BY ID (SHOW)
  it('2-GET PRODUCT BY ID', async () => {
    const res = await request.get('/api/products/1');
    expect(res.status).toBe(200);
  });

  //4-UPDATE PRODUCT BY ID
  const updatedTestProd: Product = { name: 'headphones', price: 300 };
  //providing token
  it('4-UPDATE A PRODUCT (With Token)', async () => {
    const res = await request
      .patch('/api/products')
      .send(updatedTestProd)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  //without providing a token
  it('4-UPDATE A PRODUCT (NO Token)', async () => {
    const res = await request.patch('/api/products').send(updatedTestProd);
    expect(res.status).toBe(401); //unauthorized
  });

  //5-DELETE A PRODUCT BY ID
  //Without providing a token
  it('5-DELETE A PRODUCT (NO Token)', async () => {
    const res = await request.delete('/api/products/1');
    expect(res.status).toBe(401); //unauthorized
  });

  //providing a token
  it('5-DELETE A PRODUCT (With Token)', async () => {
    const res = await request
      .delete('/api/products/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });
});
