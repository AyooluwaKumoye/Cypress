/// <reference types = "cypress"/>

describe ("Login", function(){
    it("Verify Login", function(){
    cy.visit("https://www.jumia.com.ng/")

    cy.get(":nth-child(1) > .trig").click()

    cy.get("#dpdw-login-box > .inbox > .-pam > .btn").click()

    cy.get("#fi-email.fi").type("ayo")
    })

}

)