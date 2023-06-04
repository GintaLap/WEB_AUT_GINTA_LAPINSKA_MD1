import GridPage from "../pageObject/grid.page";

describe('Grid scenarios', () => {
  beforeEach( () => {
    GridPage.visit();
  });
  it ("Grid page positive case ", () =>{
    //Action
    GridPage.gridNav.click();
    GridPage.gridListRow1.contains("Two").click();
    GridPage.gridListRow2.contains('Four').click();
    GridPage.gridListRow2.contains('Six').click();
    GridPage.gridListRow3.contains('Eight').click();
    //Validation
    GridPage.gridListRow1.contains("Two").should("have.class","list-group-item active list-group-item-action");
    GridPage.gridListRow2.contains("Four").should("have.class","list-group-item active list-group-item-action");
    GridPage.gridListRow2.contains("Six").should("have.class","list-group-item active list-group-item-action");
    GridPage.gridListRow3.contains("Eight").should("have.class","list-group-item active list-group-item-action");
    GridPage.gridListRow1.contains("One").should("have.class","list-group-item list-group-item-action");
    GridPage.gridListRow1.contains("Three").should("have.class","list-group-item list-group-item-action");
    GridPage.gridListRow2.contains("Five").should("have.class","list-group-item list-group-item-action");
    GridPage.gridListRow3.contains("Seven").should("have.class","list-group-item list-group-item-action");
    GridPage.gridListRow3.contains("Nine").should("have.class","list-group-item list-group-item-action");
  });

  });
