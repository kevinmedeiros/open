function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function display(data)
{
	$.each(data.athletes, function(i, athlete) {
		$("#data").append("<tr>"+
			"<td>"+athlete.name+"</td>"+
			"<td>"+athlete.overallscore+"</td>"+
			"<td>"+athlete.scores[0].workoutrank+"</td>"+
			"<td>"+athlete.scores[0].scoredisplay+"</td>"+
			"<td>"+athlete.scores[1].workoutrank+"</td>"+
			"<td>"+athlete.scores[1].scoredisplay+"</td>"+
			"</tr>")
	})
	
}

//url = 'https://games.crossfit.com/competitions/api/v1/competitions/open/2017/leaderboards?competition=1&year=2017&division=2&scaled=0&sort=0&fittest=1&fittest1=0&occupation=0&page=101'

vars = getUrlVars()

division = 2
if(vars['division'])
{
	division = vars['division']
}
$("[name=division]").val(division)

sort = 0
if(vars['sorting'])
{
	sort = vars['sorting']
}
$("[name=sorting]").val(sort)

page = 1
if(vars.page)
{
	page = vars.page
	$("[name=page]").val(page)
}
$("[name=page]").val(page)

url='https://games.crossfit.com/competitions/api/v1/competitions/open/2017/leaderboards?division='+division+'&scaled=0&sort='+sort+'&fittest=1&fittest1=0&occupation=0&page='+page

$.ajax(url, {
	dataType: 'json',
	success: display
	})
