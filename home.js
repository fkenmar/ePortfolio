function loadHome(){
    $('#mainBody').empty()

    const jumbotron = $('<div>').attr
    ('class','jumbotron p-3 p-md-5 text-white rounded bg-dark').
    append( $('<div>').addClass('row').append( $('<div>').attr('class','col-md-6 px-0').
    append( $('<h1>').addClass('display-4').text(`Welcome to Kenmar's Portfolio`) ).append( $('<p>').attr('class','lead my-3').text(`Projects from SpringBoard Software Engineering Bootcamp
    to LaGuardia Community College's Computer Science Major map`) ) ) )
    

    $('#mainBody').append(jumbotron.hide().fadeIn(2000))
}

$(window).on('load',loadHome)

$('#home').on('click',loadHome)

function loadAboutMe(){
    $('#mainBody').empty()

    const titleText = 'Aspiring Software Engineer in the making'
    const cardText = 'Coming from the bustling streets of Manila, Philippines and immigrating to Queens, NY at the age of 10, Kenmar Francisco came with a dream from when his parents gifted him a PC that he tinkered on so much that he developed a fascination with coding. Modding and cheating through games with programing loopholes, Kenmar developed a skill in coding where he applied to SpringBoard Software Engineer Coding Bootcamp during the end of senior year of high school. Armed with his life passion, Kenmar dreamed of showcasing his full-stack abilities'
    


    const aboutMePg = $('<div>').addClass('card').
    append( $('<div>').addClass('card-header').text('My History').addClass('text-center') ).append(  $('<div>').addClass('card-body').append( $('<h5>').addClass('card-title').text(titleText) ).append($('<p>').addClass('card-text').text(cardText) )  )

    

    $('#mainBody').append(aboutMePg.hide().fadeIn(2000))

}


$('#aboutMe').on('click' ,loadAboutMe)

function loadProjects(){
    $('#mainBody').empty()
    const caption = 'Connect Four, set Player names as desired color'
    const img = $('<img>').addClass('card-img-top').attr('src','connect-four-screenshot.png')
    const card = $('<div>').addClass('card').css('width','18rem').append(img).append($('<div>').addClass('card-body').append($('<p>').addClass('card-text').text(caption)));
    const col = $('<div>').addClass('col-sm-3').addClass('');

    const row = $('<div>').addClass('row');
    
    col.append(card.hide().fadeIn(2000))

    row.append(col)




    $('#mainBody').append(row)

    const caption0 = 'A forum to post stories with a login/signup using an API';
    const img0 = $('<img>').addClass('card-img-top').attr('src','hack-or-snooze screenshot.png');
    const card0 = $('<div>').addClass('card').css('width','18rem').append(img0).append($('<div>').addClass('card-body').append($('<p>').addClass('card-text').text(caption0)));
    const col0 = $('<div>').addClass('col-sm-3');
   
    col0.append(card0.hide().fadeIn(2000));

    row.append(col0)

}

$('#projects').on('click',loadProjects)

function loadClasses(){

    const titleText = 'My pledge for LaGuardia Community College';
    const cardText = ''

    const classPledge = $('<div>').addClass('card')
};

$('#classes').on('click',loadClasses)