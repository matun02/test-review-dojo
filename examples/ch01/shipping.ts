import { isFreeShipping, type Order } from './rules';

/** 通常の送料（円） */
export const BASE_FEE = 500;

/**
 * 仕様:
 * - 会員、または小計 5000 円以上なら送料無料。それ以外は 500 円。
 * - 小計が負の数・NaN・Infinity のときは RangeError を投げる。
 */
export function shippingFee(order: Order): number {
  if (!Number.isFinite(order.subtotal) || order.subtotal < 0) {
    throw new RangeError(`小計が不正です: ${order.subtotal}`);
  }
  return isFreeShipping(order) ? 0 : BASE_FEE;
}
