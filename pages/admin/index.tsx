import Cookies from 'cookies';
import Layout from "@/components/Layout"

const Dashboard = () => {
    return (
        <Layout titlePage="Inicio"> 
            <div>This is a Dashboard page which is private.</div>
        </Layout>
    )
};


Dashboard.getInitialProps = async ({req, res, props}) => {
    const cookies = new Cookies(req, res);
    const teste = cookies.get("IMEALS__AUTH");

    console.log(teste)

    return {};
};


export default Dashboard;