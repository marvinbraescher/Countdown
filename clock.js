
var date,
    now = new Date().getTime(),
    timer = ''

function data(dates){

    clearInterval(timer)
    date = new Date(dates).getTime()

    function updateTime(date) {
        now = new Date().getTime()
        var distance =  date - now
        var day = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var sec = Math.floor((distance % (1000 * 60 ) / 1000))

        document.getElementById('day').innerHTML = day
        document.getElementById('hour').innerHTML = hour
        document.getElementById('min').innerHTML = min
        document.getElementById('sec').innerHTML = sec

        if (date < now ){
            document.getElementById('day').innerHTML = 'E'
            document.getElementById('hour').innerHTML = 'N'
            document.getElementById('min').innerHTML = 'D'
            document.getElementById('sec').innerHTML = '.'
            document.getElementsById('end').style.display = 'none'
        }
    }

    timer = setInterval(function() {
        updateTime(date)
    }, 1000 )    

}

