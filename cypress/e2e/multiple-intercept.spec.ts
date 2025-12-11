describe('intercepts', () => {
  const requests = [];
  it('intercepts', () => {
    cy.visit('./html/intercept.html');

    cy.intercept('POST', 'https://testutils.com/api/echo').as('echo');

    /*
    cy.intercept('POST', 'https://testutils.com/api/echo', req => {
      req.alias = 'echo';
      requests.push(req.body);
      req.continue(res => {
        if (res.body.request.body.message === 'one') {
          console.log(res.body);
        }
      });
    });
    */

    cy.get('#1').click();
    cy.get('#2').click();
    cy.get('#3').click();

    const logMessage = (response: any) =>
      cy.log(response?.body?.request?.body?.message);

    // wait #1
    cy.wait('@echo').then(({ response }) => {
      logMessage(response);
    });

    // wait #2
    cy.wait('@echo').then(({ response }) => {
      logMessage(response);
    });

    // wait #3
    cy.wait('@echo').then(({ response }) => {
      logMessage(response);
    });

    /*
    cy.wait(1000);
    cy.wrap(null).then(() => console.log(JSON.stringify(requests)));
    */
  });
});
