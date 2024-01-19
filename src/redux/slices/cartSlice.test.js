import { addItem, removeItem, clearCart, cartSlice, selectCart } from './cartSlice';

describe('cart slice reducer', () => {
  it('should handle addItem', () => {
    const initialState = { cart: {} };
    const payload = {'store1': [{ uniqueId: 'item1' }] };
    const nextState = cartSlice.reducer(initialState, addItem(payload));

    expect(nextState.cart).toEqual({ store1: [{ uniqueId: 'item1' }] });
  });

  it('should handle removeItem', () => {
    const initialState = { cart: { store1: [{ uniqueId: 'item1' }] } };
    const payload = { storeId: 'store1', uniqueId: 'item1' };
    const nextState = cartSlice.reducer(initialState, removeItem(payload));

    expect(nextState.cart).toEqual({ store1: [] });
  });

  it('should handle clearCart', () => {
    const initialState = { cart: { store1: [{ uniqueId: 'item1' }] } };
    const nextState = cartSlice.reducer(initialState, clearCart());

    expect(nextState.cart).toEqual({});
  });
});
