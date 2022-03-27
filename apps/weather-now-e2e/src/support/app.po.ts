export const getCardHeader = (cardClass: string) => cy.get(`${cardClass} > .card > .card-header`);

export const getCardBody = (cardClass: string) => cy.get(`${cardClass} > .card > :nth-child(2) > .card-body`);
export const getCardBodyValue = (cardClass: string) => cy.get(`${cardClass} > .card > :nth-child(2) > .card-body > :nth-child(1)`);

export const shouldHaveTemperatureClass = (cardClass: string, temperatureSpan: JQuery<HTMLElement>) => {
  const temperatureValue = parseInt(temperatureSpan.text());
  const temperatureClass = temperatureValue < 6 ? 'low-temperature' : temperatureValue < 26 ? 'medium-temperature' : 'high-temperature';
  getCardBody(cardClass).should('have.class', temperatureClass);
}