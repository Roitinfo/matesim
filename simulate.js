answers = []
cells = []
current = 0

function main()
{
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");

    document.title = name
    document.getElementById("statements").setAttribute("href", "statements/" + name + ".pdf")
    document.getElementById("solutions").setAttribute("href", "solutions/" + name + ".pdf")    

    answers = loadFile("answers/" + name).split("\n")
    console.log(answers)
    for (number in answers)
    {
        number++
        var td = document.createElement("td")
        td.setAttribute("class", "domanda")
        td.setAttribute("onclick", "select(" + number + ")")
        td.innerHTML = number
        document.getElementById("questions").append(td)
        cells.push(td)
    } 
}

function select(id)
{
    current = parseInt(id)
    document.getElementById("submit").innerHTML = "invia(" + id + ")"
}

function check()
{
    if (current == 0) return
    var guess = document.getElementById("input").value
    if (guess == answers[current-1])
    {
        cells[current-1].setAttribute("class", "domanda_giusta")
    }
    else
    {
        cells[current-1].setAttribute("class", "domanda_errata")
    }
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