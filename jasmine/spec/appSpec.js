describe("Run App", function() {


  // it("", function() {
  // expect(a).toEqual(b);
  // })

  beforeAll(function(){
    localStorage.clear()
  })

  it("Should create a user and a character", function() {
    let testName = 'testBarry'
    let charName = 'Livingstone'

      console.log(document.getElementById('playerName'));
      document.getElementById('playerName').value = testName
      document.getElementById('playerNameOKButton').click()


      let p = tool.loadData('player')

      console.log(p);

      expect(p.name).toEqual(testName);

      document.getElementById('charName').value = charName
      document.getElementById('charNameOKButton').click()

  })




})
