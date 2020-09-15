
function buyNowClicked(event) {
    hub.fire('addToShoppingCart',
     { item: event.target.id });
}
Y.one('#products').delegate('click', buyNowClicked, '.buy-now-button');


testAddToShoppingCart: function() {
    var hub = Y.Mock();
    Y.Mock.expect(hub,
         {
          method: "fire"
          , args: [ "addToShoppingCart" , Y.Mock.Value.String]
         }
    );
    Y.one('.buy-now-button').simulate('click');
    Y.Mock.verify(hub);


    function buyNowClicked(event) {
        hub.fire('addToShoppingCart', { item: event.target.id });
    }
    Y.one('#products').delegate('click', buyNowClicked, '.buy-now-button');
    

    testAddToShoppingCart: function() {
        var hub = Y.Mock();
        Y.Mock.expect(hub,
             {
              method: "fire"
              , args: [ "addToShoppingCart" , Y.Mock.Value.String]
             }
        );
        Y.one('.buy-now-button').simulate('click');
        Y.Mock.verify(hub);
            }
        }
        