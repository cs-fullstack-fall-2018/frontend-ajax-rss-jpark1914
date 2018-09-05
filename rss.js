function main() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        //console.log(this.readyState);
        if (this.readyState == 4) {
            if(this.status === 200)
            {

                let xml = this.responseText;
                xmlDoc = $.parseXML(xml);
                $xml = $(xmlDoc);

                $(".root").append($xml.find("channel > title").text());

                $xml.find("item").each(function() {
                    //Do something with item here...
                    var $this = $(this),
                        item = {
                            title: $this.find("title").text(),
                            link: $this.find("link").text(),
                            description: $this.find("description").text()
                        };
                    $(".root").append("<h3>"+item.title+"<h3>").append("<p class='par'>"+item.description+"</p>").append("<a  href='"+item.link+"' class='anchor'>"+ item.link+"</a>");

                });
            }
            else
            {
                alert("ERROR RETRIEVING FILE! Status: " + this.status);
            }

        }
    };
    xhttp.open("GET", "CNN.com - RSS Channel - App Tech Section - powered by FeedBurner.xml", true);
    xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    xhttp.setRequestHeader("Pragma", "no-cache"); // HTTP 1.0.
    xhttp.setRequestHeader("Expires", "0"); // Proxies.
    xhttp.send();


}
main();