/*
  Copyright (c) 2010 Michael Stephens

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation
  files (the "Software"), to deal in the Software without
  restriction, including without limitation the rights to use,
  copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following
  conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.
*/
function pad(num) {
    var str = '' + num;
    if (str.length < 2) {
        return '0' + str;
    } else {
        return str;
    }
}

var query = $("input[name='q']").val();

var match = /(\d\d?:\d\d) ([a-zA-Z]{3}([+-]\d\d?)?)/.exec(query);

if (match) {
    var date = new Date();
    date = new Date(date.toLocaleDateString() + " " + match[0]);

    var text = match[0] + " is " + date.getHours() + ":" +
        pad(date.getMinutes()) + " local time.";

    var html = "<table class='std'><tr><td><img src='/images/calc_img.gif' width='40' height='30' alt='' /></td><td> </td><td nowrap=''><h2 class='r' style='font-size:138%'><b>" + text + "</b></h2></td></tr></table>";

    $("#res").prepend(html);
}
