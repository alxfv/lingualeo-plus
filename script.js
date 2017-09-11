
var checkLeoIntervalId = setInterval(checkLeo, 100);

function checkLeo() {
    if (typeof LEO !== 'undefined' && 'classes' in LEO && 'TrainingRepetition' in LEO.classes) {
        clearInterval(checkLeoIntervalId);

        (function (_playSound) {                         // Cache the original method
            LEO.classes.TrainingRepetition.prototype._playSound = function (t) {  // Redefine the method
                // Extra function logic here
                var q = this._currentQuestion;
                newUrl = 'http://audio.oxforddictionaries.com/en/mp3/' + q.word_value + '_us_1.mp3';
                var key = q.sound_url;
                soundManager.sounds[key].url = newUrl;
                soundManager.sounds[key].unload();

                // Now, call the original method
                return _playSound.apply(this, arguments);
            };

            console.log('Audio in repetition has been replaced');
        })(LEO.classes.TrainingRepetition.prototype._playSound);
    }
}

// setTimeout(function() {
//
//     console.log(LEO.classes);
//
//     (function (play) {                         // Cache the original method
//         LEO.classes.Talker.prototype.play = function (t) {  // Redefine the method
//             console.trace();
//             // Now, call the original method
//             return play.apply(this, arguments);
//         };
//
//     })(LEO.classes.Talker.prototype.play);
// }, 1000);

// setTimeout(function () {
//
//     /* Example: Send data from the page to your Chrome extension */
//     document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
//         detail: LEO // Some variable from Gmail.
//     }));
// }, 1000);