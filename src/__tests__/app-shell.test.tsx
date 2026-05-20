import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("App shell", () => {
  it("renders financial notes and disclaimer", () => {
    render(<Home />);

    expect(
      screen.getByText(/All financial amounts are in millions of USD/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/not investment advice/i),
    ).toBeInTheDocument();
  });
});
