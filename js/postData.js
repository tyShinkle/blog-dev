export const postData = `[
    {
        "postTitle": "Introduction to HTML",
        "postDate":"04.10.2023",
        "postTags":["#html"],
        "postBody":[
            {"elementType":"heading", "content":"What is HTML?"},
            {"elementType":"paragraph", "content":"HTML is an initialism which stands for Hypertext Markup Language and it is the foundation upon which web pages are built. It is used to categorize and attribute properties to data. Data in this case may be text, images, videos or audio. We categorize these data types with the use of 'tags'. Tags look like this..."},
            {"elementType":"code", "content":[{"type":"tag", "content":"<p></p>"}]},
            {"elementType":"paragraph", "content":"The set of tags above are known in HTML as a paragraph element, there are many elements which help describe the structure of our web pages. The above tags are empty though, usually paragraph tags are used to turn a string of text into an HTML paragraph element like so..."},
            {
                "elementType":"code", 
                "content":
                [
                    {"type":"tag", "content":"<p>"},
                    {"type":"text-html", "content":"Hello!"},
                    {"type":"tag", "content":"</p>"}
                ]
            },
            {"elementType":"paragraph", "content":"If the above element were to be inserted into the body of an HTML document and opened by a browser the browser would 'interpret' it with a certain set of rules used for paragraph elements. We're getting a bit ahead of ourselves though. What is an HTML document? How do browsers interpret these documents?"},
            {"elementType":"heading", "content":"The HTML Document"}
        ]
    },
    {
        "postTitle":"Build a CRUD API with Lambda Functions and DynamoDB", 
        "postDate":"03.31.2023", 
        "postTags":["#node","#aws","#api", "#test"], 
        "postBody":[
            {  
                "elementType":"heading",
                "content":"Step One: Create a DynamoDB Table"
            }, 
            {
                "elementType":"paragraph",
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "elementType":"code",
                "content":[
                            {"type":"keyword", "content":"function "},
                            {"type":"function", "content":"test"},
                            {"type":"bracket", "content":"() "},
                            {"type":"bracket", "content":"{"},
                            {"type":"newLine", "content":""},
                            {"type":"indentation", "content":""},
                            {"type":"variable", "content":"console"},
                            {"type":"punctuation", "content":"."},
                            {"type":"function", "content":"log"},
                            {"type":"bracket", "content":"("},
                            {"type":"data", "content":"\\"test\\""},
                            {"type":"bracket", "content":")"},
                            {"type":"punctuation", "content":";"},
                            {"type":"newLine", "content":""},
                            {"type":"bracket", "content":"}"}
                        ]
            }
        ]
    },
    {
        "postTitle":"Git Revert Examples",
        "postDate":"04.01.2023",
        "postTags":["#git", "#test"], 
        "postBody":[
            {
                "elementType":"heading",
                "content":"Revert a Single File"
            },
            {
                "elementType":"paragraph",
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }, 
    {
        "postTitle":"Building a LAMP Server at Home",
        "postDate":"04.02.2023",
        "postTags":["#linux", "#apache", "#sql", "#php", "#test"], 
        "postBody":[
            {
                "elementType":"heading",
                "content":"Step One: Grab an Old Laptop / PC"
            },
            {
                "elementType":"paragraph",
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }, 
    {
        "postTitle":"Mastering CSS Grid",
        "postDate":"04.04.2023",
        "postTags":["#css", "#grid", "#test"], 
        "postBody":[
            {
                "elementType":"heading",
                "content":"Why use CSS Grid?"
            },
            {
                "elementType":"paragraph",
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }
]`;