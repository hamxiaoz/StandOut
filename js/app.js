$(document).ready(function(){

    // convert from text (with newline embedded) to html 
    // ref: http://stackoverflow.com/a/6455874/166286
    function toHTML(text) {
        var htmls = [];
        var lines = text.split(/\n/);
        // The temporary <div/> is to perform HTML entity encoding reliably.
        //
        // document.createElement() is *much* faster than jQuery('<div/>')
        // http://stackoverflow.com/questions/268490/
        //
        // You don't need jQuery but then you need to struggle with browser
        // differences in innerText/textContent yourself
        var tmpDiv = jQuery(document.createElement('div'));
        for (var i = 0 ; i < lines.length ; i++) {
            var html = tmpDiv.text(lines[i]).html();

            if(!(/^>+/).test(lines[i])) {
                html = "<span class=\"standout\">" + html + "</span>";
            }

            htmls.push(html);
        }
        return htmls.join("<br>");
    }

    function updateResult() {
        var input = $("#input-box").val();
        $('#result').html(toHTML(input));
    }

    $("#input-box").on("input", updateResult);
    $("#clearInput").on("click", function(){
        // clear
        $("#input-box").val("");
        updateResult();
    });

    // provide example text
    var exampleText = "> -----Original Message-----\n"+
        "> From: Someone [mailto:someone@gmail.com]\n"+
        "> Sent: Thursday, January 10, 2013 3:29 PM\n"+
        "> To: Someone\n"+
        "> Cc: One, Two, Three\n"+
        "> Subject: Re: Strip Emails\n"+
        ">\n"+
        "> My comments:\n"+
        "> Someone wrote:\n"+
        ">> Email\n"+
        ">>\n"+
        ">> Electronic mail, commonly referred to as email or e-mail, is a method of exchanging digital messages from an author to one or more recipients. \n"+
        ">> Modern email operates across the Internet or other computer networks.\n"+
        ">> Some early email systems required that the author and the recipient both be online at the same time, in common with instant messaging.\n"+
        ">> Today's email systems are based on a store-and-forward model. \n"+
        ">> Email servers accept, forward, deliver and store messages. Neither the users nor their computers are required to be online simultaneously; they need connect only briefly, typically to an email server, for as long as it takes to send or receive messages.\n"+
        ">> Origin \n"+
        ">>\n"+
        ">> Precursors\n"+
        ">>\n"+
        ">> Sending text messages electronically could be said to date back to the Morse code telegraph of the mid 1800s; and the 1939 New York World's Fair, where IBM sent a letter of congratulations from San Francisco to New York on an IBM radio-type, calling it a high-speed substitute for mail service in the world of tomorrow.\n"+
        ">> [23] Teleprinters were used in Germany during World War II,[24] and use spread until the late 1960s when there was a worldwide Telex network.\n"+
        ">> Additionally, there was the similar but incompatible American TWX, which remained important until the late 1980s.[25]\n"+
        ">>\n"+
        "> Though they're all similar in concept, these original email systems had widely different features and ran on systems that were incompatible with each other. \n"+
        "> They allowed communication only between users logged into the same host or \"mainframe,\" although there might be hundreds or thousands of users within an organization.\n"+
        ">> 1962 - 1440/1460 Administrative Terminal System[citation needed]\n"+
        ">> 1968 - ATS/360[citation needed]\n"+
        ">>\n"+
        "> Email networks\n"+
        "> Soon systems were developed to link compatible mail programs between different organisations over dialup modems or leased lines, creating local and global networks\n"+
        "> Other, separate networks were also being created including\n"+
        "> Unix mail was networked by 1978's uucp,[41] which was also used for USENET newsgroup postings\n"+
        "> IBM mainframe email was linked by BITNET in 1981[42]\n"+
        "> IBM PCs running DOS in 1984 could link with FidoNet for email and shared bulletin board posting\n"+
        ">> LAN email systems\n"+
        ">>\n"+
        ">> In the early 1980s, networked personal computers on LANs became increasingly important.\n"+
        ">> Server-based systems similar to the earlier mainframe systems were developed.\n"+
        ">> Again, these systems initially allowed communication only between users logged into the same server infrastructure.\n"+
        ">>\n"+
        "> Early interoperability among independent systems included:\n"+
        "> ARPANET, the forerunner of today's Internet, which defined the first protocols for dissimilar computers to exchange email\n"+
        "> uucp implementations for non-Unix systems, which were used as an open \"glue\" between differing mail systems, primarily over dialup telephones\n"+
        "> CSNet, which used dial-up telephone access to link additional sites to the ARPANET and then Internet\n"+
        "> In the early 1970s, Ray Tomlinson updated an existing utility called SNDMSG so that it could copy messages (as files) over the network. \n"+
        "> Lawrence Roberts, the project manager for the ARPANET development, took the idea of READMAIL, which dumped all \"recent\" messages onto the user's terminal, and wrote a program for TENEX in TECO macros called RD, which permitted access to individual messages.\n"+
        "> Barry Wessler then updated RD and called it NRD.[45]\n"+
        "Can you find me quickly in this long email?\n"+
        ">> The ARPANET computer network made a large contribution to the development of email.\n"+
        ">> There is one report that indicates experimental inter-system email transfers began shortly after its creation in 1969.\n"+
        ">> Ray Tomlinson is generally credited as having sent the first email across a network, initiating the use of the \"@\" sign to separate the names of the user and the user's machine in 1971, when he sent a message from one Digital Equipment Corporation DEC-10 computer to another DEC-10.\n"+
        ">> The two machines were placed next to each other.\n"+
        ">> Tomlinson's work was quickly adopted across the ARPANET, which significantly increased the popularity of email. For many years, email was the killer app of the ARPANET and then the Internet.\n"+
        ">>\n"+
        "> Most other networks had their own email protocols and address formats;\n"+
        "> as the influence of the ARPANET and later the Internet grew, central sites often hosted email gateways that passed mail between the internet and these other networks.\n"+
        "> Internet email addressing is still complicated by the need to handle mail destined for these older networks.\n"+
        ">> Please let me know if I've overlooked anything or if you have any \n"+
        ">> questions/wish to chat.\n"+
        ">>\n"+
        ">> Thanks,\n"+
        ">>\n"+
        ">> Someone\n"+
        ">>\n";
    $('#input-box').text(exampleText).trigger('input');
});
