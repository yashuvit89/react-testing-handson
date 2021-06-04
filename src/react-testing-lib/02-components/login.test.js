import { render, getByRole } from "@testing-library/react";
import { Login } from "../../components/Login";
/* 
    Login UI component testing
*/

test("Basic checks", () => {
  const container = render(<Login />);
  const name = getByRole("text", { name: /name/i });
  expect(name).not.toBeNull();
});
