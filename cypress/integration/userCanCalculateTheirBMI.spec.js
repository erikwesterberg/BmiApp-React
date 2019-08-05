describe("BMI Converter", () => {
  before(function() {
    cy.visit("http://localhost:3000");
  });
  beforeEach(function() {
    // Reload the application between tests to reset state
    cy.reload();
  });

  it('should display "Bmi-Calculator" text on page', () => {
    cy.contains("Bmi-Calculator");
  });

  describe("Metric method", () => {
    beforeEach(() => {
      // This before block will be executed prior to each test in this describe block
    //   cy.get('select[className="text"]').select("metric");
      cy.get('input[name="weight"]').type("95");
      cy.get('input[name="height"]').type("186");
    });

    it("displays assesment", async () => {
      cy.contains("You are Overweight");
    });

    it("displays BMI value", async () => {
      cy.contains("BMI of 27.46");
    });
  });
});
