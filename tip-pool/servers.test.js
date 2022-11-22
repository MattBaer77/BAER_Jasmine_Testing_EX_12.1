describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';

  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');

    //tests go here

  });

  afterEach(function() {
    // teardown logic
    // serverNameInput.value ='';
    console.log("after");
    // serverId = 0;
    // ^ MATT, TURN THIS BACK ON
    serverTbody.innerHTML = '';
    allServers = {};

  });
});
