// テスト C: 内部の関数をモックして「呼び出し方」を検証しているテスト
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
