import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Testing in <CounterApp />", () => {
  const initVal = 100;
  test("should match with the snapshot", () => {
    const { container } = render(<CounterApp value={initVal} />);

    expect(container).toMatchSnapshot();
  });

  test("should show initial value of 100", () => {
    render(<CounterApp value={initVal} />);

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      initVal.toString()
    );
  });

  test("should increment the counter", () => {
    render(<CounterApp value={initVal} />);
    fireEvent.click(screen.getByRole("button", { name: "+1" }));

    expect(screen.getByText("101")).toBeTruthy();
  });

  test("should decrement the counter", () => {
    render(<CounterApp value={initVal} />);
    fireEvent.click(screen.getByRole("button", { name: "-1" }));

    expect(screen.getByText("99")).toBeTruthy();
  });

  test("should work reset button", () => {
    render(<CounterApp value={initVal} />);
    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initVal)).toBeTruthy();
  });
});
