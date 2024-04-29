import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    await screen.findByTestId("listEvents");
  });
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Isabelle");
    await screen.findByText("Christine");
  });
  it("a footer is displayed", async () => {
    render(<Home />);
    await screen.findByTestId("footer");
  });
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    waitFor(() => {
      expect(screen.getByTestId("lastEvent")).toBeInTheDocument()
    })
  });
});
