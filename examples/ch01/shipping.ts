import { isFreeShipping, type Order } from './rules';

/** 通常の送料（円） */
export const BASE_FEE = 500;

/**
 * 仕様: 会員、または小計 5000 円以上なら送料無料。それ以外は 500 円。
 */
export function shippingFee(order: Order): number {
  return isFreeShipping(order) ? 0 : BASE_FEE;
}
