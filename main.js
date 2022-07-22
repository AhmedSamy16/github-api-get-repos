
// Start The Variables

let theInput = document.querySelector("input"),

    theButton = document.querySelector(".input span"),

    theResultDiv = document.querySelector(".result");

// End The Variables

// Start The Actions

theButton.onclick = function () {

    getRepos();
}
// End The Actions

// Start Functions

function getRepos() {
    if (theInput.value == "") {

        let spanMsg = document.createElement("span"),

            spanMsgText = document.createTextNode("The Input Shouldn't Be Empty");

        spanMsg.appendChild(spanMsgText);

        theResultDiv.innerHTML = "";

        theResultDiv.appendChild(spanMsg);
    } else {

        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then(response => response.json())
        .then(data => {

            theResultDiv.innerHTML = "";

            data.forEach(repo => {

                // The Main Div
                let mainDiv = document.createElement("div"),
                    mainDivText = document.createTextNode(repo.name);

                mainDiv.appendChild(mainDivText);

                mainDiv.className = "repo-box";

                // The Link
                let theLink = document.createElement("a"),
                    theLinkText = document.createTextNode("Visit");

                theLink.appendChild(theLinkText);

                theLink.href = `https://github.com/${theInput.value}/${repo.name}`;

                theLink.setAttribute("target", "_blank");

                // Start Span
                let starsSpan = document.createElement("span"),
                    starsSpanText = document.createTextNode(`Stars: ${repo.stargazers_count}`);

                starsSpan.appendChild(starsSpanText);

                mainDiv.appendChild(theLink);

                mainDiv.appendChild(starsSpan);

                theResultDiv.appendChild(mainDiv);

            })
        })
    }
}
// End Functions