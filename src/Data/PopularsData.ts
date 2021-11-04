import faker from "faker";
import { Product } from "Types/Product";

function generateId(): string {
  return Math.random().toString(36).substr(2, 16);
}

export function generageFakeProduct(generateCount: number): Product[] {
  const products: Product[] = [];
  for (let i = 0; i < generateCount; i++) {
    products.push({
      id: generateId(),
      product_name: faker.name.jobTitle(),
      product_description: faker.name.jobDescriptor(),
      product_image: faker.random.image(),
      product_price: Math.floor(Math.random() * 1000 + 1000),
      product_sale: 20,
    });
  }

  return products;
}
