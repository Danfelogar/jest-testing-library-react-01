describe("Test in <DemoComponent />", () => {
  test("this test must not fail", () => {
    // 1. Initialize
    const message1 = "Hello World!";

    // 2. Incentive
    const message2 = message1.trim();

    // 3. Observe the behavior
    expect(message1).toBe(message2);
  });
});
