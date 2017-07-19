function design0(text){
	var fill = document.getElementById('filler').value;
	var index1 = 0;
    var index = 0;
    var indent = 2;
    var sizex = 75;
	var commentStart = fill + fill;
    var overLoad = false;

    //each loop in the do_while can be thought of an individual line
    do
    {
        text = insertText(index1, text, commentStart);//left line of *

        for(var i=0; i<indent; i++)//this will insert how much indent
            text = insertText(index1+2, text, " ");

        index = text.indexOf('\n', index1);//finds where the next \n is and finds its place and puts it into index
        if(index == -1)
        {
        	for (var i = text.length; i<(index1 + sizex); i++)//this adds the correct amount of spacing between the text and the right column of *
            text = insertText(text.length, text, " ");
        }
        else
        {
	        for (var i = index; i<(index1 + sizex); i++)//this adds the correct amount of spacing between the text and the right column of *
	            text = insertText(index, text, " ");
	    }

        text = insertText(index1+sizex, text, fill);//right line of *
        text = insertText(index1+sizex, text, fill);

        index1 += sizex+3;

        //if ((index1-index) >= sizex && index != -1) // checks to make sure the text inputed does not exceed the size.
		if(index == -1 && text.length + 1 > index1)
			overLoad = true;
		if (index + indent - 1 > index1)
            overLoad = true;

    }while(index != -1 && !overLoad);

    //Top line:
    text = insertText(0, text, "/*");
    for (var i = 2; i < sizex + 2; i++)
        text = insertText(2, text, fill);
    text = insertText(sizex+2, text, '\n');


    //Bottom Line:
    text += '\n';
    for (var i = 1; i<sizex+1; i++)
        text += fill;
    text += "*/";

	if(overLoad)
		return "Error Overload Dectectect, change max width";
	else
		return text;


}
