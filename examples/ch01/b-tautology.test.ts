// テスト B: 期待値を「実装と同じ計算」で作っているテスト
import { describe, expect, it } from 'vitest';
import { FREE_THRESHOLD } from './rules';
import { BASE_FEE, shippingFee } from './shipping';

describe('shippingFee（B: 実装をなぞる）', () => {
  it('しきい値未満なら通常送料', () => {
    const order = { subtotal: FREE_THRESHOLD - 1, isMember: false };
    expect(shippingFee(order)).toBe(BASE_FEE);
  });

  it('しきい値以上なら送料無料', () => {
    const order = { subtotal: FREE_THRESHOLD, isMember: false };
    const expected = order.subtotal >= FREE_THRESHOLD ? 0 : BASE_FEE;
    expect(shippingFee(order)).toBe(expected);
  });
});
