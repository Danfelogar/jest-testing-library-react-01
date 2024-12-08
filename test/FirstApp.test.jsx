import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Testing in <FirstApp />", () => {
  test("should match with the snapshot", () => {
    const title = "Hola, Soy Vegeta";

    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    //to expect the snapshot this is the way to verify that ui is not changed
    // expect(container).toMatchSnapshot();
    //in this line ask if the title exist at least once no matter the position of this
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
    //find the element by the data-testid and ask if the innerHTML is equal to the title remember the toContain is more flexible than toBe
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("should show a subtitle send per props", () => {
    const title = "Hola, Soy Vegeta";
    const subTitle = "Soy un subtítulo";

    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(2);
  });
});
