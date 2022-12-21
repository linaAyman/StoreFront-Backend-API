//import order type and model
import { OrderProduct } from '../../types/order-product.type';
import { OrderProductModel } from '../../models/order-product.model';

//create a order-product model instance
const opModel = new OrderProductModel();

describe('ORDER_PRODUCT MODEL TESTS', () => {
  //INSERT INTO (add new product to order)
  it('1-INSERT NEW ORDER_PRODUCT INTO DATABASE', async () => {
    const testOP: OrderProduct = { orderId: 2, quantity: 6, productId: 2 };
    const result = await opModel.addProductOrder(testOP);
    expect(result).toBeTruthy();
    expect(result.quantity).toEqual(6);
  });

  //UPDATE WHERE
  it('UPDATE ORDER_PRODUCT DATA IN DATABASE (update quantity)', async () => {
    const updatedOP: OrderProduct = {
      id: 2,
      orderId: 2,
      quantity: 8,
      productId: 2,
    };
    const result = await opModel.updateProductOrder(updatedOP);
    expect(result).toBeTruthy();
    expect(result.quantity).toEqual(8);
  });

  //DELETE WHERE
  it('4-DELETE AN ORDER BY ID', async () => {
    const result = await opModel.deleteProductOrder(2);
    expect(result).toBeTruthy();
  });
});
