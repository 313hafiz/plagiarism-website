function checkPlagiarism() {
    const text = document.getElementById("inputText").value.trim();

    if (text === "") {
        alert("Please paste some content first.");
        return;
    }

    const words = text.split(/\s+/).length;

    if (words > 300) {
        alert("Free version allows up to 300 words only.");
        return;
    }

    document.getElementById("results").innerHTML =
        `<p><strong>Plagiarism Detected:</strong> 18% (Demo Result)</p>
         <p><em>Suggestion:</em> Rewrite content to make it unique.</p>`;
}

function rewriteText() {
    const text = document.getElementById("inputText").value.trim();

    if (text === "") {
        alert("Please paste some content first.");
        return;
    }

    const rewrittenText =
        "This rewritten content keeps the original meaning intact while improving wording, sentence structure, and readability to ensure uniqueness and better SEO performance. (Demo Version)";

    document.getElementById("results").innerHTML =
        `<p><strong>Rewritten Content:</strong></p>
         <p>${rewrittenText}</p>`;
}
