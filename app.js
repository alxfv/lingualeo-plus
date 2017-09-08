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