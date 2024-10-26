/// <reference types="cypress" />; ///

describe("test remove schedule app", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("create contacts", () => {
    createContact("test of app");
    createContact("Contact for to be delete");

    cy.get(".contato")
      .last()
      .find("li")
      .first()
      .should("have.text", "Contact for to be delete");
  });

  it("contact del click", () => {
    cy.get(".delete").last().click();
    cy.get(".contato")
      .last()
      .find("li")
      .first()
      .should("not.include.text", "Contact for to be delete");
  });
});

const createContact = (name) => {
  cy.get("form input[type=text]").type(name);
  cy.get("form input[type=email]").type("delete@delete.com");
  cy.get("form input[type=tel]").type("31 9 9999-9999{enter}");
};
