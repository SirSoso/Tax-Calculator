import { renderHook, act } from "@testing-library/react";

import { instanceDB } from "../../api/config";
import { TaxAPIResponse } from "../../models/tax.model";
import { useTaxCalculator } from "../../hooks/useTaxCalculator";

type Response = {
  data: TaxAPIResponse;
};

jest.mock("../../api/config", () => ({
  instanceDB: {
    get: jest.fn(),
  },
}));

describe("useTaxCalculator", () => {
  const mockBrackets = [
    { min: 0, max: 50000, rate: 0.15 },
    { min: 50000, rate: 0.25 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calculates taxes successfully", async () => {
    const mockResponse: Response = {
      data: {
        tax_brackets: mockBrackets,
      },
    };

    (instanceDB.get as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useTaxCalculator());

    await act(async () => {
      await result.current.calculate(100000, 2022);
    });

    expect(instanceDB.get).toHaveBeenCalledWith(
      "/tax-calculator/tax-year/2022"
    );
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.result).toBeDefined();
  });

  it("sets error when api fails", async () => {
    (instanceDB.get as jest.Mock).mockRejectedValue(new Error("Network error"));

    const { result } = renderHook(() => useTaxCalculator());

    await act(async () => {
      await result.current.calculate(50000, 2022);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeTruthy();
    expect(result.current.result).toBeNull();
  });

  it("retries last request when retry is called", async () => {
    const mockResponse: Response = {
      data: {
        tax_brackets: mockBrackets,
      },
    };

    (instanceDB.get as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useTaxCalculator());

    await act(async () => {
      await result.current.calculate(50000, 2022);
    });

    await act(async () => {
      result.current.retry();
    });

    expect(instanceDB.get).toHaveBeenCalledTimes(2);
  });
});
