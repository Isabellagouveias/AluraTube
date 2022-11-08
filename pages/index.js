import config from "../config.json"
import styledComponents from "styled-components";

function HomePage() {
    const estilosDaHomePage = { backgroundColor: "red" };
    return (
    <div style={estilosDaHomePage}>
        <Menu></Menu>
        <Header></Header>
        <TimeLine></TimeLine>
    </div>
    );
}

export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <img src="banner"/>
            <img src={`https://github.com/${config.github}.png`}/>
            {config.name}
            {config.job}
        </StyledHeader>
    )
}

function TimeLine() {
    return (
        <div>
            TimeLine
        </div>
    )
}