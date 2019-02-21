var moment = require('moment');

let btnTime = document.querySelector('.btn-time')
let btnDur = document.querySelector('.btn-duration')
let rsltTimeSelect = document.querySelector('.result-1')
let rsltDurSelect = document.querySelector('.result-2')


let rsltDurVal = moment(document.querySelector('.hh-d-2')+':'+document.querySelector('.mm-d-2'),'HH:mm') < moment(document.querySelector('.hh-d-1')+':'+document.querySelector('.mm-d-1'),'HH:mm') ? 'cool' : 'nothing'




btnTime.addEventListener('click', () => { 
  rsltTimeSelect.innerHTML = Number(document.querySelector('.hh-t').value) + Number(document.querySelector('.mm-t').value) / 60
})

btnDur.addEventListener('click', () => {

  let date1 = moment(document.querySelector('.hh-d-1').value+':'+document.querySelector('.mm-d-1').value,'HH:mm')
  let date2 = moment(document.querySelector('.hh-d-2').value+':'+document.querySelector('.mm-d-2').value,'HH:mm')



  if (date2 < date1) {
    date2.add(1,'d')
    rsltDurSelect.innerHTML = moment(date2-date1)._i / 3600000
  } else {
    rsltDurSelect.innerHTML = moment(date2-date1)._i / 3600000
  }

})
