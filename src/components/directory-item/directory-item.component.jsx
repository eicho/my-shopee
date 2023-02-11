//renamed from 'category-item'

// import "./directory-item.styles.scss";
import { useNavigate } from "react-router";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
    // <div className="directory-item-wrapper">
    //   <div
    //     className="background-image"
    //     style={{ backgroundImage: `url(${imageUrl})` }}
    //   />
    //   <div className="directory-item-body">
    //     <h2>{title}</h2>
    //     <p>Shop Now</p>
    //   </div>
    // </div>
  );
};

export default DirectoryItem;
