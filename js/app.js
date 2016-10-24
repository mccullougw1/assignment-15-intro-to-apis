// https://congress.api.sunlightfoundation.com/legislators?apikey=fabace3492914d7a870a927d2351ae26

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}

var containerEl = document.querySelector('.container')

var incomingData = function(legislatorData){
   console.log(legislatorData)
   console.log(legislatorData.results)

   forEach(legislatorData.results, function(legislatorObj){

      var bigStr =     '<div class="col-sm-4">'
        bigStr +=       '<div class="thumbnail">'
        bigStr +=       '<div class="caption">'
        bigStr +=         '<h4>' + legislatorObj.first_name + ' ' + legislatorObj.last_name + '</h4>'
        bigStr +=           '<h5>' + legislatorObj.chamber + ' -- ' + legislatorObj.party + '-' + legislatorObj.state_name  + '</h5>'
        bigStr +=           '<ul>' + '<li>' + 'email: ' + legislatorObj.oc_email + '</li>' + '<li>' + 'website: ' + legislatorObj.website + '</li>'+ '<li>' + 'facebook: ' + legislatorObj.facebook_id + '</li>' + '<li>' + 'twitter: ' + legislatorObj.twitter_id + '</li>' + '</ul>'
        bigStr +=          '<h7>'+ '<strong>' + 'Term End' + legislatorObj.term_end + '</strong>' +'</h7>'
        bigStr +=         '</div>'
        bigStr +=       '</div>'
        bigStr +=     '</div>'

      containerEl.innerHTML += bigStr

   })

}

$.getJSON('https:congress.api.sunlightfoundation.com/legislators?apikey=fabace3492914d7a870a927d2351ae26').then(incomingData)
