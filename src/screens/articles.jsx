import React from "react";
import TitlteBar from "../components/TitlteBar";

const ArticlesScreen = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <TitlteBar title="Articles" />

      <main className="w-full h-screen p-20">
        <div>
          <h1 className="text-6xl font-bold">This is a Article</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            iste, odio reprehenderit ut a eum architecto vel nobis. Ipsam nihil
            dolore tempore, reiciendis blanditiis soluta quae earum animi amet
            repellendus iusto repudiandae minima! Doloribus exercitationem quas
            adipisci quo in obcaecati dolorum temporibus nostrum minus
            excepturi. Ducimus itaque quas ipsa laborum.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ArticlesScreen;
