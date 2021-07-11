import { Main, Content, Page } from "./styles";
import { props } from "./types";

import Header from "@/components/header/logged";
import withPrivateRoute from "@/components/privateRoute";
import Menu from "@/components/Layout/MenuAside"

const Layout = ({children, titlePage}: props) => {

    return (
        <Main> 
            <Menu />
            <Content> 
                <Header titlePage={titlePage} />
                <Page> 
                    {
                        children
                    }
                </Page>
            </Content>
        </Main>
    )
}


export default withPrivateRoute(Layout);