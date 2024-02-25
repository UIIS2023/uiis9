   /*--pravimo varijablu questions u koju skladištimo naša pitanja--*/
var questions =[
    {
        prompt:"U kom gradu je rodjen Nikola Tesla?\n (a)Beogradu\n (b)Smiljanu\n (c)New York-u", 
        answer: "b"
    },
    {
        prompt:"U kom gradu je rodjen Mihajlo Pupin?\n (a)Beogradu\n (b)Nišu\n (c)Idvoru", 
        answer: "c"
    },
    {
        prompt:"Šta je po zanimanju bio otac Nikole Tesle?\n (a)Sveštenik\n (b)Advokat\n (c)Profesor", 
        answer: "a"
    },
    {
        prompt:"Mihajlo Pupin je nastavničku karijeru započeo kao:\n (a)Profesor fizike\n (b)Profesor matematike\n (c)Profesor fizičke matematike", 
        answer: "c"
    },
    {
        prompt:"Merna jedinica Tesla, nazvana po Nikoli Tesli, koristi se za računanje?\n (a)Električnog potencijala i napona\n (b)Energije i rada\n (c)Magnetnog polja", 
        answer: "c"
    },
    {
        prompt:"Koliko je svojih pronalazaka Pupin patentirao?\n (a)14\n (b)34\n (c)24 ", 
        answer: "b"
    },
]
/*--varijabla score predstavlja koliko tačnih odgovora imamo na kraju--*/
var score = 0;

/*--prolazimo kroz svako pitanje--*/
for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if( response == questions[i].answer){
        score++;
        alert("Tačno!");
    }
    else{
        alert("Netačno!");
    }
}
alert("Imate " + score + "/" + questions.length + " tačnih odgovora.");