//import order type and model
import { Order } from '../../types/order.type';
import { OrderModel } from '../../models/order.model';

//create an order model instance
const orderModel = new OrderModel();

describe('ORDER MODEL TESTS', () => {
  //INSERT INTO
  it('1-INSERT NEW ORDER INTO DATABASE', async () => {
    const newOrder: Order = { status: 'active', userId: 2 };
    const result = await orderModel.createOrder(newOrder);
    expect(result).toBeTruthy();
    expect(result.status).toEqual('active');
  });

  //SELECT *
  //let id: string;
  it('2-SELECT * FROM DATABASE', async () => {
    const result = await orderModel.getAllOrders();
    expect(result).toBeTruthy();
  });

  //SELECT WHERE
  it('3-SELECT ORDERS BY ID', async () => {
    const result = await orderModel.getOrderById(2);
    expect(result).toBeTruthy();
  });

  //UPDATE WHERE
  it('UPDATE ORDER DATA IN DATABASE', async () => {
    const updatedOrder: Order = {
      id: 2,
      status: 'complete',
      userId: 2,
    };
    const result = await orderModel.updateOrder(updatedOrder);
    expect(result).toBeTruthy();
    expect(result.status).toEqual('complete');
  });

  //DELETE WHERE
  it('4-DELETE AN ORDER BY ID', async () => {
    const result = await orderModel.deleteOrder(2);
    expect(result).toBeTruthy();
  });
});
