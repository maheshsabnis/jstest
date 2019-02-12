describe("Spy on the voter", function() {
  it("Use Voter Criteria to check if percon can vote", function() {
    var criteria = new voteCriteria();
    var per = new person();
    // replace checkAge() function by spy (mock)
    spyOn(criteria, "checkAge");
    per.canVote(criteria);
    // function called w/o parameter
    //expect(criteria.checkAge).toHaveBeenCalled();
    // function called with parameter
    // here number of parameters must match
    expect(criteria.checkAge).toHaveBeenCalledWith(19);
  });

  it(
    ("Create a new spy function using createSpy()",
    function() {
      var per = new person();
      per.getAge = jasmine.createSpy("getPersonAge() spy");
      per.getAge();
      expect(per.getAge()).toHaveBeenCalled();
    })
  );
});
