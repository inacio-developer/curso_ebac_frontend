describe("test edit schedule app", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("create contact for edition", () => {
    createContact();
    cy.get(".contato")
      .last()
      .find("li")
      .first()
      .should("have.text", "contact for edit");
  });

  it("contact edit save", () => {
    cy.get(".contato").last().find(".edit").click();
    cy.get("form input[type=text]").clear().type("rename contact");
    cy.get(".alterar").click();
    cy.get(".contato")
      .last()
      .find("li")
      .first()
      .should("have.text", "rename contact");
  });

  it("contact edit cancel", () => {
    cy.get(".contato").last().find(".edit").should("be.visible").click();
    cy.get("form input[type=text]")
      .clear()
      .type("this change will not be saved");
    cy.get(".cancelar").click();
    cy.get(".contato")
      .last()
      .find("li")
      .first()
      .should("have.text", "rename contact");
  });
});

const createContact = () => {
  cy.get("form input[type=text]").type("contact for edit");
  cy.get("form input[type=email]").type("edit@edit.com");
  cy.get("form input[type=tel]").type("31 9 9999-9999{enter}");
};
