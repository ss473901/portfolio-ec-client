import Navbar from "../component/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar表示テスト", () => {
  test("コンポーネントが表示されること", () => {
    render(<Navbar />);
    expect(screen.getByText("REGISTER")).toBeInTheDocument();
  });
});
