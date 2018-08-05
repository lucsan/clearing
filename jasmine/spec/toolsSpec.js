describe("tools", function() {


  // it("", function(){
  //
  // })

  it("should be available globally as tool onject", function() {
    expect(typeof(tool)).toEqual('object');
  })

  it("should store data to local storage as JSON string", function() {
    let data = {test: 'abc'}
    tool.storeData('test', data)
    let store = localStorage.getItem('test')
    expect(store).toEqual('{"test":"abc"}');
  })

  it("should retrieve data from local storage as original object", function() {
    let data = {test: 'abc'}
    tool.storeData('test', data)
    data = tool.loadData('test')
    expect(data).toEqual({test: 'abc'});
  })

  it("should delete a specific object", function() {
    let data = {test: 'abc'}
    tool.storeData('test', data)
    tool.storeRemoveItem('test')
    data = tool.loadData('test')
    expect(data).toEqual(null);
  })

})
