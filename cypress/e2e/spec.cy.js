describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev-pos.nolimitz.id/') //visit website
    cy.get('input[name=email]').type("cari.kopi@mailinator.com") //input email
    cy.get('input[name=password]').type(`${"password."}{enter}`) //input password dan klik enter untuk masuk
  })
})

// nambah komen