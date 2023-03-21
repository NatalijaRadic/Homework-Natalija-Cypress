/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe("Register page", () => {
    it("Visit register page", () => {
        cy.visit('/register')
    });
    it('Successful register', () => {
        cy.visit("/register");
        cy.get().type('Natalija');
        cy.get('input[id="last-name"]').type('Radic');
        cy.get('input[id="email"]').type('natka.radic@gmail.com');
        cy.get('input[id="password"]').type('Naftalija1986');
        cy.get('input[id="password-confirmation"]').type('Naftalija1986');
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    });
    it('Unseccssful register case 1', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('Natalija');
        cy.get('input[id="last-name"]').type('Radic');
        cy.get('input[id="email"]').type('');
        cy.get('input[id="password"]').type('Naftalija1986');
        cy.get('input[id="password-confirmation"]').type('Naftalija1986');
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    });
    it('Unseccssful register case 2', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('Natalija');
        cy.get('input[id="last-name"]').type('Radic');
        cy.get('input[id="email"]').type('natka.radic@gmail.com');
        cy.get('input[id="password"]').type('');
        cy.get('input[id="password-confirmation"]').type('');
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    });
    it('Unseccssful register case 3', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('');
        cy.get('input[id="last-name"]').type('Radic');
        cy.get('input[id="email"]').type('natka.radic@gmail.com');
        cy.get('input[id="password"]').type('Naftalija1986');
        cy.get('input[id="password-confirmation"]').type('Naftalija1986');
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    });
    it('Unseccssful register case 4', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('Natalija');
        cy.get('input[id="last-name"]').type('');
        cy.get('input[id="email"]').type('natka.radic@gmail.com');
        cy.get('input[id="password"]').type('Naftalija1986');
        cy.get('input[id="password-confirmation"]').type('Naftalija1986');
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    });
    it('Unseccssful register case 5', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register");
        cy.get('input[id="first-name"]').type('');
        cy.get('input[id="last-name"]').type('Radic');
        cy.get('input[id="email"]').type('natka.radic@gmail.com');
        cy.get('input[id="password"]').type('Naftalija1986');
        cy.get('input[id="password-confirmation"]').type('Naftalija1986');
        cy.get('input[type="checkbox"]');
        cy.get('button[type="submit"]').click();
    });
});