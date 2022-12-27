import { assert, beforeAll, describe, expect, it, vi } from 'vitest';
import { renderHook, cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { useDarkSide } from './useDarkSide';

describe('useDarkSide', () => {
  it('should default to dark theme', () => {
    const { result } = renderHook(() => useDarkSide());
    expect(result.current[0]).toBe('dark');
  });
});
