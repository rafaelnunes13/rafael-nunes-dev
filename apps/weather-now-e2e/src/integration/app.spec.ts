import { IAppFixture } from '../fixtures/app-fixture.interface';
import { getCardBody, getCardBodyValue, getCardHeader, shouldHaveTemperatureClass } from '../support/app.po';

describe('weather-now', () => {
  let fixture: IAppFixture;

  before(() => {
    cy.fixture('app.json').then((fixtureData: IAppFixture) => fixture = fixtureData);
  })

  beforeEach(() => cy.visit('/'));

  it('should display three cards with temperature', () => {
    getCardHeader(fixture.firstCard.selector).should('contain.text', fixture.firstCard.headerLabel);
    getCardBodyValue(fixture.firstCard.selector)
      .should('exist')
      .then(temperatureSpan => shouldHaveTemperatureClass(fixture.firstCard.selector, temperatureSpan));

    getCardHeader(fixture.secondCard.selector).should('contain.text', fixture.secondCard.headerLabel);
    getCardBodyValue(fixture.secondCard.selector)
      .should('exist')
      .then(temperatureSpan => shouldHaveTemperatureClass(fixture.secondCard.selector, temperatureSpan));

    getCardHeader(fixture.thirdCard.selector).should('contain.text', fixture.thirdCard.headerLabel);
    getCardBodyValue(fixture.thirdCard.selector)
      .should('exist')
      .then(temperatureSpan => shouldHaveTemperatureClass(fixture.thirdCard.selector, temperatureSpan));
  });
});
