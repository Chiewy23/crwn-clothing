import DirectoryItem from "./directory-item/directory-item.component";

import "./categories.styles.scss";

const Categories = ({categories}) => {
    return (
        <div className="categories-container">
        {
          categories.map(({id, title, imageUrl}) => {
            return (
              <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
            )
          })
        }
      </div>
    );
};

export default Categories;