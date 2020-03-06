// Adding in the live chat feature when the user clicks on the messsages tab
$(document).ready(function(){
    $("#messages").click(function(){
    $('#content').empty();
    $('#content').append('<div class="container" ng-cloak ng-app="chatApp">' +
                      '<h1>Live Chat</h1>'+
                      '<div class="chatbox" ng-controller="MessageCtrl as chatMessage">'+
                      '<div class="chatbox__user-list">'+
                      '<h1>Staff</h1>'+
                      '<div class="chatbox__user--active">'+
                        '<p>Joe</p>'+
                      '</div>'+
                      '<div class="chatbox__user--busy">'+
                        '<p>Susy</p>'+
                      '</div>'+
                      '<div class="chatbox__user--active">'+
                       ' <p>Bob</p>'+
                      '</div>'+
                    '  <div class="chatbox__user--active">'+
                       ' <p>Seth</p>'+
                      '</div>'+
                      '<div class="chatbox__user--away">'+
                        '<p>John</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="chatbox__messages" ng-repeat="message in messages">'+
                      '<div class="chatbox__messages__user-message">'+
                        '<div class="chatbox__messages__user-message--ind-message">'+
                          '<p class="name">Joe</p>'+
                          '<br/>'+
                          '<p class="message">How is everyone</p>'+
                         ' <p class="time">10:52pm</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '  <form>'+
                   '   <input type="text" placeholder="Enter your message">'+
                  '  </form>'+
                  '</div>'

            );
    });
  });