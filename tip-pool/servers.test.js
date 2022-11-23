describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    // console.log("before a");
    // console.log(allServers);
    serverNameInput.value = 'Alice';
    // console.log(allServers);
    // console.log("before b");


  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(serverId).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submit submitServerInfo() if empty input', function () {
    serverNameInput.value = '';
    updateServerTable();

    expect(Object.keys(allServers).length).toEqual(0);

  })

  it('should update #servertable on updateServerTable()', function () {

    submitServerInfo();
    updateServerTable();

    let currentTDList = document.querySelectorAll('#serverTable td');

    // console.log (currentTDList);

    expect(currentTDList.length).toEqual(2);
    expect(currentTDList[0].innerText).toEqual('Alice');
    expect(currentTDList[1].innerText).toEqual('$0.00');
    // expect(currentTDList[3].innerText).toEqual('X');

  });

  afterEach(function() {
    // teardown logic

    // console.log("after");
    // console.log(serverId)
    // console.log(serverTbody.innerHTML)
    // console.log(allServers);
    // console.log(Object.keys(allServers).length);

    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};

    // console.log(serverId)
    // console.log(serverTbody.innerHTML)
    // console.log(allServers); // <--ASK MIKAEL ABOUT THIS
    // console.log(Object.keys(allServers).length);

  });
});
