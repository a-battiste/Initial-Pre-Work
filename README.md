# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit https://www.techtonic.com/, the browser translates the domain name to an IP address and requests the file from our ISP DNS server. If the IP address is in the ISP DNS server's cache, it tells the browser that it is available and sends us to the website. If the IP address is not in the ISP DNS server's cache, the ISP DNS server requests the IP address from the root DNS server that it is located in. Once it is located, the ISP DNS server places it in it's cache and lets the browser know that it is found, and the browser sends you to https://www.techtonic.com/.

## From start to finish, how does data reach you to be rendered in the browser?

First, the browser receives raw bytes of information containing the HTML data. The HTML raw bytes are then converted into characters, which are the actual characters used in the HTML document. Then the characters are converted into tokens, which interpret the HTML code. After that, the tokens are converted into nodes which form the DOM (document object model). As this process is going on, the browser also requests the CSS file from the source of the HTML data and similarly converts the data from raw bytes to characters, to tokens, to nodes, then the CSSOM. Then the browser combines the DOM and CSSOM into the render tree, and the browser renders the nodes onto the screen. However, the DOM construction process is paused when the browser encounters a script tag, and the javascript execution the CSSOM waits. Once the scripts have executed, the data continues to be converted until it is fully rendered.  

## What code is rendered in the browser?

The browser renders HTML, CSS, and JavaScript code. These are client side coding languages.

## What is the server-side code’s main function?

Server side code is run on the server, which is used to process user input, compile pages, structure web applications, and interact with permanent storage.

Retrieved from: https://softwareengineering.stackexchange.com/questions/171203/what-are-the-differences-between-server-side-and-client-side-programming

## What is the client-side code’s main function?

Client-side code's main function is to run on the client or browser. Client side code makes a web page more dynamic and interactive.

## What is runtime?

Runtime is the amount of time between when an application is started or executed, and when it is quit/ended.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

There are as many instances of the client side assets as there are clients accessing the assets, plus the root server and any ISP DNS servers that cashed the assets.

## How many instances of the server-side code are available at any given time?

I am not sure about this question because it depends on how many servers there are with the server side code. If the application/web site has high traffic, there could be more than just one instance of the server side code.

## How many instances of the databases connected to the server application are created?

I am also not completely sure about this answer, but I believe there is 1 instance of the database connected to the server application. I am not sure why you would need more than 1 database. 
