describe('usergit', function(){
  beforeEach(module('usergit'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('usergit');
  }));

  it('initializes with an empty search box', function(){
    expect(ctrl.searchBox).toBe(undefined);
  });

  describe('when a github user is searched for', function(){
    ctrl.searchBox = 'user';
    ctrl.doSearch();
    expect(ctrl.searched).toEqual('user');
  })
});
