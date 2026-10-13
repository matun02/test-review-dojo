/** 送料無料になる小計の下限（円） */
export const FREE_THRESHOLD = 5000;

export type Order = {
  /** 商品の小計（円） */
  subtotal: number;
  /** 会員かどうか */
  isMember: boolean;
};

/** 送料無料の条件: 会員、または小計が FREE_THRESHOLD 円以上 */
export function isFreeShipping(order: Order): boolean {
  return order.isMember || order.subtotal >= FREE_THRESHOLD;
}
