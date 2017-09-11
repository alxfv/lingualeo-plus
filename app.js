function replaceAudio(node) {
    var $audio = node.querySelector('.iconm-voice-pretty');
    var $word = node.querySelector('.card-word-eng') || node.querySelector('h3.word');

    if ($audio && $word) {

        // var oxAudioUrl = 'http://www.oxfordlearnersdictionaries.com/us/media/american_english/us_pron/p/' + $word.substr(0, 3) + '/' + $word.substr(0, 5) + '/' + word + '__us_1.mp3';
        var word = $word.innerText;
        var oxAudioUrlUS = 'http://audio.oxforddictionaries.com/en/mp3/' + word + '_us_1.mp3';
        var oxAudioUrlGB = 'http://audio.oxforddictionaries.com/en/mp3/' + word + '_gb_1.mp3';
        $audio.setAttribute('data-voice-url', oxAudioUrlUS);

        $audioGb = $audio.cloneNode(true);
        $audioGb.setAttribute('data-voice-url', oxAudioUrlGB);
        $audioGb.style.top = '-80px';

        // https://stackoverflow.com/questions/11117519/inserting-a-clone-after-the-original
        $audio.parentNode.insertBefore($audioGb, $audio.nextSibling);

        console.log('Audio has been replaced');
    }

    // var $repetitionTask = node.querySelector('.repetition-task');
    //
    // if ($repetitionTask) {
    // }
}

// $(function() {
console.log('LinguaLeo PLUS has been started');

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
            // https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
            mutation.addedNodes.forEach(function(node, index, list) {

                if (node.nodeType === 1) {
                    replaceAudio(node);
                }
            });
        }
    });
});

// configuration of the observer:
// var config = { attributes: true, childList: true, characterData: true };
var config = { subtree: true, childList: true, characterData: true, attributes: true };

// pass in the target node, as well as the observer options
observer.observe(document.querySelector('#content'), config);
//
// function waitForElement(){
//
//     console.log('CHECK LEO', typeof window.LEO !== 'undefined');
//     if(typeof LEO !== 'undefined'){
//         //variable exists, do what you want
//
//         (function(_playSound) {                         // Cache the original method
//             LEO.classes.TrainingRepetition.prototype._playSound = function(t) {  // Redefine the method
//                 // Extra function logic here
//                 // console.log('arguments=', t, n, this);
//                 // console.log(this, arguments);
//
//                 // http://audio.oxforddictionaries.com/en/mp3/ease_us_1.mp3
//                 // var newUrl = '';
//                 // var soundUrl = '';
//                 // for (var i = 0; i < this._questions.length; i++) {
//                 //     soundUrl =
//                 //     newUrl = 'http://audio.oxforddictionaries.com/en/mp3/' + this._questions[i].word_value + '_us_1.mp3';
//                 //     soundManager.sounds[key].url = newUrl;
//                 //     soundManager.sounds[key].unload();
//                 // }
//
//                 var q = this._currentQuestion;
//                 newUrl = 'http://audio.oxforddictionaries.com/en/mp3/' + q.word_value + '_us_1.mp3';
//                 var key = q.sound_url;
//                 soundManager.sounds[key].url = newUrl;
//                 soundManager.sounds[key].unload();
//
//                 // Now, call the original method
//                 return _playSound.apply(this, arguments);
//             };
//
//             console.log('Audio in repetition has been replaced');
//         })(LEO.classes.TrainingRepetition.prototype._playSound);
//     }
//     else{
//         setTimeout(waitForElement, 250);
//     }
// }
//
// setTimeout(
//
//     waitForElement(), 10000);


// var checkLeoIntervalId = window.setInterval(checkLeo, 100);
//
// function checkLeo() {
//     console.log('check leo', typeof window.LEO !== 'undefined' && 'classes' in window.LEO && 'TrainingRepetition' in window.LEO.classes);
//     if (typeof LEO !== 'undefined' && 'classes' in LEO && 'TrainingRepetition' in LEO.classes) {
//         console.log('LEO is defined');
//         clearInterval(checkLeoIntervalId);
//
//         (function(_playSound) {                         // Cache the original method
//             LEO.classes.TrainingRepetition.prototype._playSound = function(t) {  // Redefine the method
//                 // Extra function logic here
//                 // console.log('arguments=', t, n, this);
//                 // console.log(this, arguments);
//
//                 // http://audio.oxforddictionaries.com/en/mp3/ease_us_1.mp3
//                 // var newUrl = '';
//                 // var soundUrl = '';
//                 // for (var i = 0; i < this._questions.length; i++) {
//                 //     soundUrl =
//                 //     newUrl = 'http://audio.oxforddictionaries.com/en/mp3/' + this._questions[i].word_value + '_us_1.mp3';
//                 //     soundManager.sounds[key].url = newUrl;
//                 //     soundManager.sounds[key].unload();
//                 // }
//
//                 var q = this._currentQuestion;
//                 newUrl = 'http://audio.oxforddictionaries.com/en/mp3/' + q.word_value + '_us_1.mp3';
//                 var key = q.sound_url;
//                 soundManager.sounds[key].url = newUrl;
//                 soundManager.sounds[key].unload();
//
//                 // Now, call the original method
//                 return _playSound.apply(this, arguments);
//             };
//
//             console.log('Audio in repetition has been replaced');
//         })(LEO.classes.TrainingRepetition.prototype._playSound);
//     }
// };