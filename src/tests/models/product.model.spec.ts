//import product type and model
import { Product } from '../../types/product.type';
import { ProductModel } from '../../models/product.model';

//create a product model instance
const productModel = new ProductModel();

describe('PRODUCT MODEL TESTS', () => {
  //INSERT INTO
  it('1-INSERT NEW PRODUCT INTO DATABASE', async () => {
    const newProduct: Product = {
      name: 'Nikon DSLR Camera',
      price: 7500,
    };
    const result = await productModel.createProduct(newProduct);
    expect(result).toBeTruthy();
    expect(result.price).toEqual(7500);
  });

  //SELECT *
  //let id: string;
  it('2-SELECT * FROM DATABASE', async () => {
    const result = await productModel.getAllProducts();
    expect(result).toBeTruthy();
  });

  //SELECT WHERE
  it('3-SELECT PRODUCTS BY ID', async () => {
    const result = await productModel.getProductById(2);
    expect(result).toBeTruthy();
  });

  //UPDATE WHERE
  it('UPDATE PRODUCT DATA IN DATABASE', async () => {
    const updatedProduct: Product = {
      id: '2',
      name: 'Nikon DSLR Camera',
      price: 8500,
    };
    const result = await productModel.updateProduct(updatedProduct);
    expect(result).toBeTruthy();
    expect(result.price).toEqual(8500);
  });

  //DELETE WHERE
  it('4-DELETE A PRODUCT BY ID', async () => {
    const result = await productModel.deleteProduct(2);
    expect(result).toBeTruthy();
  });
});
