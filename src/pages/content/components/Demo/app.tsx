import { useEffect,useState } from "react";
import axios from "axios";

export default function App() {
  const [extractData,setExtractData] = useState({})
  const [dom,setDom] = useState({})

  function getTitleSuggestions() {
      console.log("Title suggestion1")
    const url = "https://sre-hackathon-ads-backend-srv-ayfqltafia-ey.a.run.app/chat_headings_rephrase";
    axios.post(url, {"message": extractData["title"] }).then((res) => {
      console.log("Title suggestion2")
      console.log(res);
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



    setExtractData( {
      title: title.length > 0 ? title[0].textContent : "",
      description: description.length > 0 ? [].map.call(doc.querySelectorAll("p"), function(el) {
        return el?.innerHTML;
      }) : "",
      images: Array.from(images).map(img => img.src)

    });
  }


  return <div className="content-view">content view11</div>;
}
