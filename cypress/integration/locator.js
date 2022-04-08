/// <reference types ="cypress"/>

describe ('Locating Elements', function(){

    it('Verify Locators', function(){
        cy.visit("https://www.jumia.com.ng/")    // opens Url

        cy.get("#fi-q").type("Apple Macbook Pro I5")     // searchbox

         // cy.get("#search").click()        // opens search item
        
         cy.get("#search > .btn").click()  // search item

        cy.wait(5000)
        cy.get(":nth-child(5) > .core > .img-c > .img").click()
       
       // cy.get("#add-to-cart").click()           // add to cart
         
       // cy.wait(5000)
        // cy.get(".-gy8").click()   // opens cart 

        // cy.get(".prc").contains("₦ 260,000")  

    }
    
    )
})