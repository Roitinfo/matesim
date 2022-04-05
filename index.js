function main()
{
    var names = loadNames()
    for (contest_name of names)
    {
        var link = "simulate.html?name=" + contest_name;
        var tag = document.createElement("a");
        tag.setAttribute("href", link)
        tag.innerHTML = contest_name

        var il = document.createElement("li")
        il.appendChild(tag)
        document.getElementById("contests").appendChild(il)
    }
}

function loadNames()
{
    return loadFile("names").split("\n")
}

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }