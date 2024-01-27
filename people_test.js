Feature('people');

Scenario('Teste validar request people',  ({ I }) => {
    I.sendGetRequest('/people')
    I.seeResponseCodeIsSuccessful();

});

Scenario('Teste validar request people 1',  ({ I }) => {
    I.sendGetRequest('/people/1')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['name', 'height'])
    I.seeResponseContainsJson({
        name: 'Luke Skywalker',
        birth_year: "19BBY",
        gender: "male",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
    })

});
