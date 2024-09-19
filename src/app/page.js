
// import Image from "next/image";
// import styles from "./page.module.css";

import styles from "./page.module.css"
import data from "./data.json";
import ArticleCard from "./components/articleCard";

export default function Home() {
  // console.log({data});
  return (
    <main className={styles.pageWrapper}> 
      <h1>Articles</h1>
      {data.map((article, i) => ( // array method. represents the value of the array at that given index
        // <h2>{article.title}</h2>
        <ArticleCard 
        key={i} 
        blurb={article.blurb}
        id={article.id}
        image={article.image}
        publishedDate={article.publishedDate}
        title= {article.title}
        /> // this has a self closing tag
        
      ))}

    </main>
  );
}

