// テスト A: 仕様を「具体的な値」で書いたテスト
import { describe, expect, it } from 'vitest';
import { shippingFee } from './shipping';

describe('shippingFee（A: 仕様を具体値で書く）', () => {
  it('非会員で小計 4999 円なら送料 500 円', () => {
    expect(shippingFee({ subtotal: 4999, isMember: false })).toBe(500);
  });

  it('非会員で小計 5000 円なら送料無料', () => {
    expect(shippingFee({ subtotal: 5000, isMember: false })).toBe(0);
  });

  it('会員なら小計 100 円でも送料無料', () => {
    expect(shippingFee({ subtotal: 100, isMember: true })).toBe(0);
  });
});
