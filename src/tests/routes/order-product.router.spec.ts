// import supertest
import supertest from 'supertest';
//jwt to simulate a token
import jwt from 'jsonwebtoken';
import config from '../../config/config';
//import all types
import { User } from '../../types/user.type';
import { OrderProduct } from '../../types/order-product.type';
import { Order } from '../../types/order.type';
import { Product } from '../../types/product.type';
// import app
import app from '../../server';

//create a request to server (app)
const request = supertest(app);

//dummy order and product to simulate a relation
const testProd: Product = { name: 'speaker', price: 500 };
const testOrder: Order = { status: 'active', userId: 2 };

//create a user and a token
const dummyUser: User = {
  firstName: 'Jenna',
  lastName: 'Ortega',
  email: 'JennaOrtega@gmail.com',
  password: 'jenna1254dfhus5',
};
const token = jwt.sign(dummyUser, config.jwtKey as string);

const createOrder_and_Product = async () => {
  await request
    .post('/api/products')
    .send(testProd)
    .set('Authorization', `Bearer ${token}`);
  //   console.log('spec prod stat: ', pres.status);
  await request
    .post('/api/orders')
    .send(testOrder)
    .set('Authorization', `Bearer ${token}`);
  //   console.log('spec prod stat: ', ores.status);
};

describe('ORDER_PRODUCTS ROUTES TESTS', () => {
  //call createOrder_and_Product to create product and order
  createOrder_and_Product();
  //1- ADDING PRODUCT TO ORDER
  const testOP: OrderProduct = { quantity: 3, productId: 2 };
  //providing a token
  it('1-CREATE AN ORDER_PRODUCT (With Token)', async () => {
    const res = await request
      .post('/api/orders/2/products')
      .send(testOP)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(201);
  });

  //without providing a token
  it('1-CREATE AN ORDER_PRODUCT (NO Token)', async () => {
    const res = await request.post('/api/orders/2/products').send(testOP);
    expect(res.status).toBe(401); //unauthorized
  });

  //2-UPDATE AN ORDER_PRODUCT BY ID (change quantity of product in order)
  const updatedTestOP: OrderProduct = { id: 1, quantity: 5, productId: 2 };
  //providing token
  it('4-UPDATE AN ORDER_PRODUCT RELATION (With Token)', async () => {
    const res = await request
      .patch('/api/orders/2/products')
      .send(updatedTestOP)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  //without providing a token
  it('4-UPDATE AN ORDER (NO Token)', async () => {
    const res = await request
      .patch('/api/orders/2/products')
      .send(updatedTestOP);
    expect(res.status).toBe(401); //unauthorized
  });

  //3-DELETE AN ORDER_PRODUCT RELATION BY ID
  //Without providing a token
  it('5-DELETE AN ORDER_PRODUCT RELATION (NO Token)', async () => {
    const res = await request.delete('/api/orders/products/1');
    expect(res.status).toBe(401); //unauthorized
  });

  //providing a token
  it('5-DELETE AN ORDER_PRODUCT RELATION (With Token)', async () => {
    const res = await request
      .delete('/api/orders/products/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });
});
