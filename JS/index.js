






var quotes=[
                {
                    quote:'“Be yourself; everyone else is already taken.”',
                    auther:"― Oscar Wilde"
                },
                {
                    quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
                    auther:"― Marilyn Monroe"
                },
                {
                    quote:'“So many books, so little time.”',
                    auther:"― Frank Zappa"
                },
                {
                    quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
                    auther:"― Albert Einstein"
                },
                {
                    quote:'“A room without books is like a body without a soul.”',
                    auther:"― Marcus Tullius Cicero"
                },
                {
                    quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
                    auther:"― Bernard M. Baruch"
                }   
            ]
var quote=document.getElementById('quote');
var author=document.getElementById('author');
var currentQuote=null
function newQuote(){
    var i=Math.floor(Math.random()*6)
    if(currentQuote!=null){
        while(i==currentQuote){
            i=Math.floor(Math.random()*6);
        }
    }
    currentQuote=i;
    quote.innerHTML=quotes[i].quote;
    author.innerHTML=quotes[i].auther;
}