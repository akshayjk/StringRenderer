var app = angular.module('demo', ['ngSanitize', 'jsonFormatter', 'ui.ace']);


app.controller('MainCtrl', function ($scope, SendCode) {

  $scope.complex = {
      "event": [
          {
              "eventId": "2",
              "eventName": "ENSPIRE 2013",
              "eventBody": "Enspire '13 Inspiring Excellence is a pageant of excellence in different walks of life - sports, entertainment, business & much more. Watch as excellence manifests in varied forms through the day as talks, debates, performances and experience zones.\r\nWith additional info...\r\nTest Data",
              "eventStart": " December 20,  2013 ",
              "eventEnd": " December 22,  2013 ",
              "images": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/Lighthouse_1.jpg",
              "twitterURL": "http://www.twitter.com/cognizant",
              "day": [
                  {
                      "eventDay": " December 20,  2013 ",
                      "sessions": [
                          {
                              "sessionId": "13",
                              "sessionName": "Opening Ceremony",
                              "sessionDuration": "30",
                              "sessionStart": " December 20,  2013 ",
                              "sessionTime": "09:30 10:00",
                              "sessionDesc": "Opening Ceremony - Experience Zones &amp; Gallery",
                              "docs": [
                                  "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/upload.pptx"
                              ],
                              "startDate": "Dec 20, 2013 9:30:00 AM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Fri Dec 20 2013 09:30:00 EST",
                              "sessionEndDate": "Fri Dec 20 2013 10:00:00 EST",
                              "image": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/Desert.jpg"
                          },
                          {
                              "sessionId": "8",
                              "sessionName": "Inaugural Address",
                              "sessionDuration": "15",
                              "sessionStart": " December 20,  2013 ",
                              "sessionTime": "10:00 10:15",
                              "sessionDesc": "Inaugural Address by AN Rao, Head of Delivery Excellence",
                              "videos": [
                                  {
                                      "URL": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/videos/original/swipe_tabs.mp4",
                                      "thumbnail": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/videos/thumbnails/66/Lighthouse.jpg"
                                  }
                              ],
                              "docs": [
                                  "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/Eventum%20-%20ArchitectureSlides.pptx"
                              ],
                              "startDate": "Dec 20, 2013 10:00:00 AM",
                              "speakerNames": "Pradeep",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Fri Dec 20 2013 10:00:00 EST",
                              "sessionEndDate": "Fri Dec 20 2013 10:15:00 EST",
                              "notes": [
                                  {
                                      "noteId": "10",
                                      "noteDesc": "Session Notes",
                                      "noteTitle": "Notes",
                                      "noteAnswer": "tester okkkkwqweqweqwe"
                                  },
                                  {
                                      "noteId": "49",
                                      "noteDesc": "Another notes",
                                      "noteTitle": "Notes",
                                      "noteAnswer": "FYI"
                                  },
                                  {
                                      "noteId": "72",
                                      "noteDesc": "notes new",
                                      "noteTitle": "notes new",
                                      "noteAnswer": "Fgfg"
                                  },
                                  {
                                      "noteId": "73",
                                      "noteDesc": "latest notes",
                                      "noteTitle": "latest notes",
                                      "noteAnswer": "Ghgh g hgfhgfh g ghghgh"
                                  }
                              ],
                              "image": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/Lighthouse.jpg"
                          },
                          {
                              "sessionId": "78",
                              "sessionName": "Enspire Theme Movie",
                              "sessionDuration": "15",
                              "sessionStart": " December 20,  2013 ",
                              "sessionTime": "10:15 10:30",
                              "sessionDesc": "Enspire Theme Movie - Get Inspired!",
                              "startDate": "Dec 20, 2013 10:15:00 AM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Fri Dec 20 2013 10:15:00 EST",
                              "sessionEndDate": "Fri Dec 20 2013 10:30:00 EST"
                          },
                          {
                              "sessionId": "95",
                              "sessionName": "Day 1 - Fourth Session",
                              "sessionDuration": "60",
                              "sessionStart": " December 20,  2013 ",
                              "sessionTime": "11:30 12:30",
                              "startDate": "Dec 20, 2013 11:30:00 AM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Fri Dec 20 2013 11:30:00 EST",
                              "sessionEndDate": "Fri Dec 20 2013 12:30:00 EST"
                          }
                      ]
                  },
                  {
                      "eventDay": " December 21,  2013 ",
                      "sessions": [
                          {
                              "sessionId": "80",
                              "sessionName": "My Pursuits For Excellence",
                              "sessionDuration": "90",
                              "sessionStart": " December 21,  2013 ",
                              "sessionTime": "09:00 10:30",
                              "sessionDesc": "My Pursuits For Excellence",
                              "startDate": "Dec 21, 2013 9:00:00 AM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sat Dec 21 2013 09:00:00 EST",
                              "sessionEndDate": "Sat Dec 21 2013 10:30:00 EST",
                              "notes": [
                                  {
                                      "noteId": "72",
                                      "noteDesc": "notes new",
                                      "noteTitle": "notes new",
                                      "noteAnswer": "Fgfg"
                                  }
                              ],
                              "image": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/Hydrangeas.jpg"
                          },
                          {
                              "sessionId": "91",
                              "sessionName": "Second session",
                              "sessionDuration": "60",
                              "sessionStart": " December 21,  2013 ",
                              "sessionTime": "11:30 12:30",
                              "startDate": "Dec 21, 2013 11:30:00 AM",
                              "speakerNames": "ctsspeaker1, ctsspeaker2, ctsspeaker3",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sat Dec 21 2013 11:30:00 EST",
                              "sessionEndDate": "Sat Dec 21 2013 12:30:00 EST"
                          },
                          {
                              "sessionId": "92",
                              "sessionName": "Third Session",
                              "sessionDuration": "30",
                              "sessionStart": " December 21,  2013 ",
                              "sessionTime": "12:30 13:00",
                              "sessionDesc": "Third Session",
                              "startDate": "Dec 21, 2013 12:30:00 PM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sat Dec 21 2013 12:30:00 EST",
                              "sessionEndDate": "Sat Dec 21 2013 13:00:00 EST"
                          },
                          {
                              "sessionId": "93",
                              "sessionName": "Fourth Session",
                              "sessionDuration": "90",
                              "sessionStart": " December 21,  2013 ",
                              "sessionTime": "13:00 14:30",
                              "sessionDesc": "Fourth Session",
                              "startDate": "Dec 21, 2013 1:00:00 PM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sat Dec 21 2013 13:00:00 EST",
                              "sessionEndDate": "Sat Dec 21 2013 14:30:00 EST"
                          },
                          {
                              "sessionId": "94",
                              "sessionName": "Fifth Session",
                              "sessionDuration": "60",
                              "sessionStart": " December 21,  2013 ",
                              "sessionTime": "14:00 15:00",
                              "sessionDesc": "Fifth Session",
                              "startDate": "Dec 21, 2013 2:00:00 PM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sat Dec 21 2013 14:00:00 EST",
                              "sessionEndDate": "Sat Dec 21 2013 15:00:00 EST"
                          }
                      ]
                  },
                  {
                      "eventDay": " December 22,  2013 ",
                      "sessions": [
                          {
                              "sessionId": "98",
                              "sessionName": "Session 0 Day 3",
                              "sessionDuration": "60",
                              "sessionStart": " December 22,  2013 ",
                              "sessionTime": "08:30 09:30",
                              "startDate": "Dec 22, 2013 8:30:00 AM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sun Dec 22 2013 08:30:00 EST",
                              "sessionEndDate": "Sun Dec 22 2013 09:30:00 EST"
                          },
                          {
                              "sessionId": "96",
                              "sessionName": "Session 1 Day 3",
                              "sessionDuration": "60",
                              "sessionStart": " December 22,  2013 ",
                              "sessionTime": "09:30 10:30",
                              "startDate": "Dec 22, 2013 9:30:00 AM",
                              "speakerNames": "ctsspeaker2",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sun Dec 22 2013 09:30:00 EST",
                              "sessionEndDate": "Sun Dec 22 2013 10:30:00 EST"
                          },
                          {
                              "sessionId": "97",
                              "sessionName": "Session 2 - Day 3",
                              "sessionDuration": "60",
                              "sessionStart": " December 22,  2013 ",
                              "sessionTime": "10:30 11:30",
                              "startDate": "Dec 22, 2013 10:30:00 AM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sun Dec 22 2013 10:30:00 EST",
                              "sessionEndDate": "Sun Dec 22 2013 11:30:00 EST"
                          },
                          {
                              "sessionId": "99",
                              "sessionName": "Session 4 Day 3",
                              "sessionDuration": "60",
                              "sessionStart": " December 22,  2013 ",
                              "sessionTime": "11:30 12:30",
                              "startDate": "Dec 22, 2013 11:30:00 AM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sun Dec 22 2013 11:30:00 EST",
                              "sessionEndDate": "Sun Dec 22 2013 12:30:00 EST"
                          },
                          {
                              "sessionId": "100",
                              "sessionName": "Session 5 Day 3",
                              "sessionDuration": "60",
                              "sessionStart": " December 22,  2013 ",
                              "sessionTime": "13:00 14:00",
                              "startDate": "Dec 22, 2013 1:00:00 PM",
                              "speakerNames": "ctsspeaker3",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sun Dec 22 2013 13:00:00 EST",
                              "sessionEndDate": "Sun Dec 22 2013 14:00:00 EST"
                          },
                          {
                              "sessionId": "101",
                              "sessionName": "Session 6 Day 3",
                              "sessionDuration": "60",
                              "sessionStart": " December 22,  2013 ",
                              "sessionTime": "14:00 15:00",
                              "startDate": "Dec 22, 2013 2:00:00 PM",
                              "eventId": "2",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Sun Dec 22 2013 14:00:00 EST",
                              "sessionEndDate": "Sun Dec 22 2013 15:00:00 EST"
                          }
                      ]
                  }
              ],
              "singleDay": false,
              "hasTrack": false,
              "venueList": [
                  {
                      "id": "6",
                      "description": "Another Room",
                      "address": "India",
                      "image": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/Penguins.jpg",
                      "name": "Another Room"
                  }
              ]
          },
          {
              "eventId": "121",
              "eventName": "Awesome Event",
              "eventBody": "Awesome Event Awesome Event Awesome Event Awesome Event Awesome Event Awesome Event\r\nAwesome Event Awesome Event Awesome Event Awesome Event Awesome Event Awesome Event\r\nAwesome Event Awesome Event Awesome Event Awesome Event Awesome Event Awesome Event\r\nAwesome Event Awesome Event Awesome Event Awesome Event Awesome Event Awesome Event\r\nAwesome Event Awesome Event Awesome Event Awesome Event Awesome Event Awesome Event",
              "eventStart": " January 24,  2014 ",
              "eventEnd": " January 24,  2014 ",
              "day": [
                  {
                      "eventDay": " January 24,  2014 ",
                      "sessions": [
                          {
                              "sessionId": "103",
                              "sessionName": "Session 7 Day 3",
                              "sessionDuration": "30",
                              "sessionStart": " January 24,  2014 ",
                              "sessionTime": "09:30 10:00",
                              "startDate": "Jan 24, 2014 9:30:00 AM",
                              "eventId": "121",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Fri Jan 24 2014 09:30:00 EST",
                              "sessionEndDate": "Fri Jan 24 2014 10:00:00 EST"
                          },
                          {
                              "sessionId": "102",
                              "sessionName": "Session 6 Day 3",
                              "sessionDuration": "240",
                              "sessionStart": " January 24,  2014 ",
                              "sessionTime": "12:00 16:00",
                              "startDate": "Jan 24, 2014 12:00:00 PM",
                              "eventId": "121",
                              "voteAverage": "0/5",
                              "userVote": "0",
                              "sessionStartDate": "Fri Jan 24 2014 12:00:00 EST",
                              "sessionEndDate": "Fri Jan 24 2014 16:00:00 EST"
                          }
                      ]
                  }
              ],
              "singleDay": true,
              "hasTrack": false,
              "venueList": [
                  {
                      "id": "12",
                      "description": "New venue",
                      "address": "India",
                      "name": "New CTS venue"
                  }
              ]
          },
          {
              "eventId": "130",
              "eventName": "testing",
              "eventBody": "testing",
              "eventStart": " January 27,  2014 ",
              "eventEnd": " January 27,  2014 ",
              "images": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/pic4_1.jpg",
              "singleDay": true,
              "hasTrack": false,
              "venueList": [
                  {
                      "id": "12",
                      "description": "New venue",
                      "address": "India",
                      "name": "New CTS venue"
                  }
              ]
          }
      ],
      "speakerList": [
          {
              "speakerId": "ctsspeaker2",
              "firstName": "CTS",
              "lastName": "Speaker 2",
              "jobtitle": "Analyst",
              "organisation": "Cognizant Technology Solutions",
              "speakerPhoto": "",
              "emailAddress": "",
              "rank": 0,
              "id": "16",
              "bio": "Has 5 years of experience in Retail"
          },
          {
              "speakerId": "ctsspeaker3",
              "firstName": "CTS",
              "lastName": "Speaker 3",
              "organisation": "Cognizant Technology Solutions",
              "speakerPhoto": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/pictures/image.jpg",
              "emailAddress": "",
              "rank": 0,
              "id": "19"
          },
          {
              "speakerId": "Pradeep",
              "firstName": "Pradeep",
              "lastName": "Shilige",
              "organisation": "Cognizant Technology Solutions",
              "speakerPhoto": "",
              "emailAddress": "",
              "rank": 2,
              "id": "15"
          },
          {
              "speakerId": "ctsspeaker1",
              "firstName": "first name",
              "lastName": "last name",
              "jobtitle": "job title",
              "organisation": "Cognizant Technology Solutions",
              "speakerPhoto": "http://ec2-54-225-228-80.compute-1.amazonaws.com/eventumbase/sites/default/files/pictures/chandra.jpg",
              "twitter": "http://twitter.url",
              "facebook": "http://facebook.url",
              "emailAddress": "",
              "blog": [
                  "http://blog.url"
              ],
              "phoneNumber": "123-456-789",
              "rank": 6,
              "id": "4",
              "bio": "speaker bio"
          }
      ]
  };
  $scope.textData ="";
  $scope.formData = {};
  $scope.renderedCode ='';
  $scope.sendCode = function(){
      console.log("sending data " + $scope.textData)

     $scope.renderedCode = SendCode.renderCode($scope.textData);
      console.log("rendered Code after service " + JSON.stringify($scope.renderedCode))

  };
  /*$scope.ClickMeAlso = function(){
      console.log("this is textData now " + $scope.textData);

  }*/
});

app.factory('SendCode',['$http', function($http, $scope){
    return {
        renderCode : function (data) {
            var SendCodeReq = {method: 'POST', url: 'http://localhost:5858/postXml', data:data};
            return $http(SendCodeReq);
        }
    }
}]);
