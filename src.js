
    var i =0;
    function Heads(i)
    {
        var x = document.createElement("IMG");
        x.setAttribute("src", "Images/Face"+i+".png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Face");

    }
    function Torsos(i)
    {
        var x = document.createElement("IMG");
        x.setAttribute("src", "Images/Body"+i+".png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Body");
    }
    function Legs(i)
    {
        var x = document.createElement("IMG");
        x.setAttribute("src", "Images/Legs"+i+".png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Leg");
    }
    function Forward(typeOfBodyPart)
    {
        i++;
    }
    function Reverse(typeOfBodyPart)
    {
        i--;
    }
