import BasePage from "./base.page";

class GridPage extends BasePage{
    static get url(){
        return "/selectable";
    }
    static get gridNav () {
        return cy.get("[id='demo-tab-grid']");
      }
    static get gridListRow1(){
        return cy.get("[id='row1']");
    }
    static get gridListRow2(){
        return cy.get("[id='row2']");
    }
    static get gridListRow3(){
        return cy.get("[id='row3']");
    }
}
export default GridPage;