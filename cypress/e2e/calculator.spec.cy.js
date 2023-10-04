describe('e2e test for calculator app', () => {
  let bnt1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0;
  let btnPlus, btnMinus, btnEqual, dashboard;

  before(() => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="btn-1"]').then(($el) => {
      bnt1 = $el
    });
    btn2 = cy.get('[data-test="btn-2"]').then(($el) => {
      btn2 = $el
    });
    cy.get('[data-test="btn-6"]').then(($el) => {
      btn6 = $el
    });
    cy.get('[data-test="btn-9"]').then(($el) => {
      btn9 = $el
    });
    cy.get('[data-test="btn-plus"]').then(($el) => {
      btnPlus = $el
    });
    cy.get('[data-test="btn-minus"]').then(($el) => {
      btnMinus = $el
    });
    cy.get('[data-test="dashboard"]').then(($el) => {
      dashboard = $el
    });
    cy.get('[data-test="btn-equal"]').then(($el) => {
      btnEqual = $el
    });
  });

  it('should check expression 2+9-6', () => {
    btn2.click()
    btnPlus.click()
    btn9.click()
    btnMinus.click()
    btn6.click()

    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('2+9-6');
    })

  })

  it('should check result of expression 2+9-6', () => {
    btnEqual.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('5');
    })

  })
  it('should check result of expression 1+2+3+4-5-6-7-8-9', () => {
    throw new Error("Write your code here")
  })
  it('should check result expression 10/10', () => {
    throw new Error("Write your code here")
  })

  it('should check result expression 0.5*10', () => {
    throw new Error("Write your code here")
  })

  it('should check result expression -0.1*99', () => {
    throw new Error("Write your code here")
  })

  it('should calculate 10 percent of 1,000', () => {
    throw new Error("Write your code here")
  })

  it('should check clear button', () => {
    throw new Error("Write your code here")
  })

  it('should check save button', () => {
    throw new Error("Write your code here")
  })

  it('should check paste button', () => {
    throw new Error("Write your code here")
  })

  it('should check change theme, toggle theme button', () => {
    throw new Error("Write your code here")
  })

})
