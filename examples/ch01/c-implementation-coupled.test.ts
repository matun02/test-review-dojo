// テスト C: 内部の関数をモックして「呼び出し方」を検証するテスト
//
// 意図: shippingFee の仕事は「判定結果を料金に変換すること」だけで、
//       無料かどうかの判定は isFreeShipping の仕事。
//       判定ロジックの影響を受けずに shippingFee だけを切り離して検証したいので、
//       isFreeShipping をモック（偽物）に差し替え、正しく呼ばれたかも確かめる。
import { describe, expect, it, vi } from 'vitest';
import { isFreeShipping } from './rules';
import { shippingFee } from './shipping';

vi.mock('./rules', () => ({ isFreeShipping: vi.fn() }));

describe('shippingFee（C: 実装の詳細に依存）', () => {
  it('isFreeShipping が true を返したら 0 を返す', () => {
    vi.mocked(isFreeShipping).mockReturnValue(true);
    const order = { subtotal: 100, isMember: false };

    expect(shippingFee(order)).toBe(0);
    expect(isFreeShipping).toHaveBeenCalledWith(order);
    expect(isFreeShipping).toHaveBeenCalledTimes(1);
  });
});
