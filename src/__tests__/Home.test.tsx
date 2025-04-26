import { expect, describe, test } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/utils/test-utils";
import { Home } from "@/routes/_protected/Home";

describe("Home Page", () => {
  test("should render weather data after fetch", async () => {
    renderWithProviders(<Home />);
    // render(<Home />);

    // Cek apakah ada loader saat loading (opsional tergantung Home)
    expect(screen.getByText(/loading/i)).toBeDefined();

    // Tunggu sampai data cuaca muncul
    await waitFor(() => {
      expect(screen.getByText(/Elevation/i)).toBeDefined();
    });
  });

  // test("should show error message if API fails", async () => {
  //   // Optional: kalau mau tes error case, tinggal ubah MSW handler sebelum test
  //   // server.use(...)

  //   renderWithProviders(<Home />);
  //   // render(<Home />);

  //   await waitFor(() => {
  //     expect(screen.getByText(/failed to fetch weather/i)).toBeDefined();
  //   });
  // });
});
