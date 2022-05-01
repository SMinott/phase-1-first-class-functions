//1st Code
function receivesAFunction(fun){
    let songsByBrandy = [
        'Full Moon', 
        'Almost Doesn\'t Count', 
        'Have You Ever']
        fun(songsByBrandy)
};

function loopOverSongs(array){
    for(let item in array){
        return item
    }
}
receivesAFunction(loopOverSongs)

// 2nd Code
function returnsANamedFunction(){
    return randomFunction
}
function randomFunction(fun){
    let songsByBrandy = [
        'Full Moon', 
        'Almost Doesn\'t Count', 
        'Have You Ever']
        fun(songsByBrandy)
};

// 3rd Code
function returnsAnAnonymousFunction(){
    return function () {
        console.log('Whatever');
      };
};