import { useEffect,useState } from "react";
import axios from "axios";

export default function App() {
  const [extractData,setExtractData] = useState({})
  const [dom,setDom] = useState({})
  const [dom,setDom] = useState({})

  function getTitleSuggestions() {
      console.log("Title suggestion1")
    const url = "https://sre-hackathon-ads-backend-srv-ayfqltafia-ey.a.run.app/chat_headings_rephrase";
    axios.post(url, {"message": extractData["title"] }).then((res) => {
      console.log("Title suggestion:", res.data.response)
    }).catch((err) => {
      console.error(err);
    })
  }


  useEffect(() => {
    console.log(extractData)
    getTitleSuggestions()
  },[extractData]);


  useEffect(() => {
    extractDataFromHtml( document.getElementsByTagName('article')[0].innerHTML)
  },[]);

  const extractDataFromHtml = (html) =>{
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const title = doc.querySelectorAll("h1, h2, h3, h4, h5, h6, title");
    const description = doc.querySelectorAll("P");
    const images = doc.querySelectorAll("img");

    setDom((prevState) => ({
      ...prevState,
      title: title[0].className,
    }));

    setExtractData( {
      title: title.length > 0 ? title[0].textContent : "",
      description: description.length > 0 ? [].map.call(doc.querySelectorAll("p"), function(el) {
        return el?.innerHTML;
      }) : "",
      images: Array.from(images).map(img => img.src)

    });
  }

  const setTitle = (suggeted)=>{
    let titleElm = document.getElementsByClassName(dom.title)[0]
    titleElm.textContent = suggeted
  }

  const FooterElm ='<div className="footer-mytaboola-title" style="position: relative;' +
      '    width: 100%;\n' +
      '    height: 30px;\n' +
      '    vertical-align: top;\n' +
      '    background-color: #9aafe142;\n' +
      '    color: white;\n' +
      '    text-align: center;"\n' +
          '<div style="vertical-align: inherit;float: right;" > ' +
      '<div style="font-size: 20px;color: black;float: left;padding: 7px;">' +
              'MyTaboola' +
            '</div>' +
          '<div style="vertical-align: inherit;float: right;padding: 5px;cursor: pointer" >' +
            '<div style="vertical-align: inherit;"><a onclick=(this.parentElement.style.display = "none";) style="font-size: 25px; vertical-align: inherit;">&#8249;</a>' +
            ' <a style="font-size: 25px; vertical-align: inherit;">&#8250;</a></div>' +
          '</div>' +
      '</div>'


  useEffect(() => {
    if(dom?.title){
      let titleElm = document.getElementsByClassName(dom.title)[0]
      let child = document.createElement('div')
      child.innerHTML = FooterElm;
      titleElm.appendChild(child)
    }
  },[dom]);
  return <div className="content-view">

  </div>;
}
