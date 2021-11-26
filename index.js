let pushups;
let serializedPushups = localStorage.getItem('pushups')
if(serializedPushups === null){
        pushups = []
} else{
        pushups = JSON.parse(serializedPushups)
}
let newNumberOfPushups = window.prompt('Enter your number of pushups: ')   
pushups.push(newNumberOfPushups)
renderChart(pushups, 'Push-ups')
serializedPushups = JSON.stringify(pushups)
localStorage.setItem('pushups', serializedPushups)

let situps;
let serializedSitups = localStorage.getItem('situps')
if(serializedSitups === null){
        situps = []
} else{
        situps = JSON.parse(serializedSitups)
}
let newNumberOfSitups = window.prompt('Enter your number of sit-ups: ')   
situps.push(newNumberOfSitups)
renderChart(situps, 'Sit-ups')
serializedSitups = JSON.stringify(situps)
localStorage.setItem('situps', serializedSitups)



let squats;
let serializedSquats = localStorage.getItem('squats')
if(serializedSquats === null){
        squats = []
} else{
        squats = JSON.parse(serializedSquats)
}
let newNumberOfSquats = window.prompt('Enter your number of squats: ')   
squats.push(newNumberOfSquats)
renderChart(squats, 'Squats')
serializedSquats = JSON.stringify(squats)
localStorage.setItem('squats', serializedSquats)


let laps;
let serializedLaps = localStorage.getItem('laps')
if(serializedLaps === null){
        laps = []
} else{
        laps = JSON.parse(serializedLaps)
}
let newNumberOfLaps = window.prompt('Enter your number of laps: ')   
laps.push(newNumberOfLaps)
renderChart(laps, 'Laps')
serializedLaps = JSON.stringify(laps)
localStorage.setItem('laps', serializedLaps)



/* CODE BEFORE IF/ELSE FOR BLANK START TO PAGE
let serializedReps = localStorage.getItem('reps')
let reps = JSON.parse(serializedReps)
let newNumberOfReps = window.prompt('Enter your number of reps: ')
reps.push(newNumberOfReps)
renderChart(reps)
serializedReps = JSON.stringify(reps)
localStorage.setItem('reps', serializedReps)
*/


