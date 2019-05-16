// the 'Database' of badge infos

var settings = {
url: "https://cis.chemi-pharm.com/digital-factory/batch/801",
type: "GET",
  dataType: 'json',
  headers: { "Authorization": "Basic " + btoa("user:ethylhydroxide") },
beforeSend: function (xhr){ xhr.setRequestHeader('Authorization', "Basic " + btoa("user:ethylhydroxide")); },
}
$.ajax(settings).done(function (response) {
  console.log(response);
  var content = response.item.id;
  $("#windSpeed").append(content);
  var currentWeather = response.lot;
  $("#currentWeather").append(currentWeather);
});

var badgeInfos = [
	{
		firstName	: 'Mike',
		lastName	: 'Newton',
		role            : 'industry',
		markerId	: 0,
		avatar	        : 'contact-sharing-in-ar/avatars/avatar-0.jpg',
	},
	{
		firstName	: 'Adam',
		lastName	: 'Huxley',
		role            : 'designer',
		markerId	: 263,
		avatar	        : 'contact-sharing-in-ar/avatars/avatar-236.jpg',
	},
	{
		firstName	= currentWeather,
		lastName	= windSpeed,
		role            : 'corporate',
		markerId	: 265,
		avatar	        : 'contact-sharing-in-ar/avatars/avatar-265.jpg',
	},
]
