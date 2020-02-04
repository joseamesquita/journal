import { Journal } from './journal'; 
import './styles.css';


$(document).ready(function () {
  $('#journal-form').submit(function (event) {
    event.preventDefault();
    var title = $('#goal').val();
    var sentence = $('#goal2').val();

    var output = new Journal(title, sentence);
    var titleLength = output.Count(output.title);
    var sentenceLength = output.Count(output.sentence);
    
    var vowelTitle = output.Vowels(output.title);
    var vowelSentence = output.Vowels(output.sentence);

    var consTitle = output.Cons(output.title);
    var consSentence = output.Cons(output.sentence);

    $('#header').text(output.title + " " + titleLength);
    $('#body').text(output.sentence + " " + sentenceLength);
    $('#vowelTitle').text("vowels in the title: " + vowelTitle);
    $('#vowelSentence').text("vowels in the sentence: " + vowelSentence);
    $('#consTitle').text("cons in the title: " + consTitle);
    $('#consSentence').text("cons in the sentence: " + consSentence);

  });
});