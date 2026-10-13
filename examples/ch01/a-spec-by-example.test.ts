// テスト A: 仕様を「具体的な値」で書いたテスト
//
// 意図: 仕様書の文章を、そのまま「この入力なら、この出力」という具体例に置き換える。
//       期待値は仕様から手で決める（実装のコードは見ない）。
//       正常系に加えて、仕様が定めた準正常系（不正な小計の拒否）も検証する。
import { describe, expect, it } from 'vitest';
import { shippingFee } from './shipping';

describe('shippingFee（A: 仕様を具体値で書く）', () => {
  describe('正常系', () => {
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

  describe('準正常系', () => {
    it('小計が負の数なら RangeError', () => {
      expect(() => shippingFee({ subtotal: -1, isMember: false })).toThrow(RangeError);
    });

    it('小計が NaN なら RangeError', () => {
      expect(() => shippingFee({ subtotal: Number.NaN, isMember: false })).toThrow(RangeError);
    });

    it('会員でも小計が負の数なら RangeError（会員判定より先に入力を検証する）', () => {
      expect(() => shippingFee({ subtotal: -1, isMember: true })).toThrow(RangeError);
    });
  });
});
