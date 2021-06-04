import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "../../components/Login";
import "@testing-library/jest-dom/extend-expect"; // to use toHaveTextContent

/* 
    Login UI component testing
*/
test("Basic form submit", () => {
  render(<Login />);

  const name = screen.getByRole("textbox", { name: /name/i });
  expect(name).toBeTruthy();

  const password = screen.getByLabelText(/password/i);
  expect(password).toBeTruthy();

  const submit = screen.getByRole("button", { name: /submit/i });
  expect(submit).toBeTruthy();

  fireEvent.change(name, { target: { value: "Yaswanth" } });
  fireEvent.change(password, { target: { value: "password" } });

  fireEvent.click(submit);

  // Check for UI values;
  expect(screen.getByText("Yaswanth")).toHaveTextContent("Yaswanth");
});
