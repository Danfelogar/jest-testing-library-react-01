import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Testing in <FirstApp />", () => {
  const title = "Hola soy el titulo";
  const subtitle = "I am a subtitle";

  test("should match with the snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show a title `Hola soy el titulo`", () => {
    render(<FirstApp title={title} />);

    //screen is the object that contains the render and allow us to interact with the component
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show at title in h1", () => {
    render(<FirstApp title={title} />);

    //screen is the object that contains the render and allow us to interact with the component
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('should show subtitle "I am a subtitle"', () => {
    render(<FirstApp title={title} subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
