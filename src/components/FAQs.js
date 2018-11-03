import React from 'react';

const FAQs = () => (
    <div className="content-container faq--bottom-margin">
        <h2 className="faq__header">Frequently Asked Questions</h2>    
        <p>On this page, you will find questions that are commonly asked about Remotivate, accompanied by their answers. If you do not find the question or answer that you are looking for, please come in contact with me to let me know about an unknown issue.</p>
        <div className="faq__entries">
            <p>Why are my images not showing up properly?</p>
            <p>Please make sure that the image URL that you provide is a direct link to the image. One way that I have found you can test whether it is a direct link or not is by entering the URL into the search bar. If a valid image shows up (e.g. does not direct you to an article), it is a direct link.</p>
            <p>Why are my videos not showing up properly?</p>
            <p>Please make sure that the Youtube video URL you provide follows this format: https://www.youtube.com/<strong>watch?v=rQZhQdg46do</strong>. It is also worth mentioning that at the moment, only Youtube video URLs are accepted.</p>
            <p>When I look at the Chrome console, I see error messages. What do these messages mean?</p>
            <p>This probably means you have Adblock enabled. When the videos are displayed, they are making requests to Youtube and Adblock is intercepting those requests.</p>
        </div>
    </div>
)

export default FAQs;