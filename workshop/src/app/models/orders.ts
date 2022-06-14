interface Order {
    id: number;
    provider: string;
    qty: number;
    price: number;
    VAT: number;
    totalPrice: number;
}

export default Order;