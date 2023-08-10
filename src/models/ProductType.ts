export interface ProductType {
    seller_id: number;
    id: number;
    category_id: number;
    num_items: number;
    title: string;
    images: string[];
    description: string;
    price_default: number;
    base_cost_default: number;
    status: number;
    channel: string[];
    category_name: string;
  }
  