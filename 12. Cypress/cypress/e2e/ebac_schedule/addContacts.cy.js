/// <reference types="cypress" />; ///

describe("test schedule app", () => {
  Cypress.env("valores", {});

  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("verify inputs", () => {
    cy.get("input").should("have.length", 3);
  });

  it("test for add", () => {
    cy.get("form input[type=text]").type("testando");
    cy.get("form input[type=email]").type("testando@gmail.com");
    cy.get("form input[type=tel]").type("31 9 9999-9999{enter}");
    cy.get("ul").last().find("li").first().should("have.text", "testando");
  });

  it("confirm add", () => {
    cy.get(".contato").should("have.length.at.least", 1);
  });
});
