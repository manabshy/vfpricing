describe('shared', () => {
  beforeEach(() => cy.visit('/iframe.html?id=timelinecomponent--primary'));
  it('should render the component', () => {
    cy.get('vfpricing-timeline').should('exist');
  });
});