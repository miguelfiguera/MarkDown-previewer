import logo from "./logo.svg";
import Badge from "react-bootstrap/Badge";
import React,{useState,useEffect} from 'react'
import { marked } from 'marked';


function App() {
const [markdown,setMarkdown]=useState('')

marked.use({
  breaks:true
})


const obj={
  markdown: `
  # I rule the world

  ## and rule the no-world. 

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

1. And there are numbered lists too.

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

  
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  
  `
}


useEffect(()=>{
function setInitialMessageAs(){
  setMarkdown(obj.markdown)
}
  
setInitialMessageAs()
},[])


  const inputStyle = {
    width: "400px",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

  const outputStyle = {
    width: "400px",
    height: "50vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

  return(
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              {" "}
              <Badge className="text-align-center" variant="light">
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            {" "}
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
              </h4>
            </div>
            <div className="input overflow-auto" style={inputStyle}>
              <textarea id="editor"
                className="input"
                defaultValue={obj.markdown}
                style={inputStyle}
                onChange={(e) => {
                  setMarkdown(e.target.value);
                }}
              >
              </textarea>
            </div>
          </div>

          <div className="col-md-6">
            {" "}
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Preview
                </Badge>
              </h4>
            </div>
            <div className='container overflow-auto' id="preview"
              style={outputStyle}
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
