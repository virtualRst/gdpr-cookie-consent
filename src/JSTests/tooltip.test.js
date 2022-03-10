const assert=require('chai').assert;

beforeAll(() => {
    document.body.innerHTML =
      "<div>" +
      '  <input id="addTask" type="text" placeholder="Add a task ..."/>' +
      "  <ul> </ul>" +
      '  <div><span id="count">0</span> tasks left to do</div>' +
      "</div>";
    // require('jquery');
    require("../../admin/js/gdpr-cookie-consent-admin");
  });

describe('tooltip',()=>{
    it('tooltip',()=>{
        expect(true).toBe(true);
    });
});