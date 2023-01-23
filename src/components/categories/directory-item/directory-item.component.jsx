import { DirectoryItemContainer, Body, BackgroundImage } from "./directory-item.styles";

const DirectoryItem = ({title, imageUrl}) => {
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;