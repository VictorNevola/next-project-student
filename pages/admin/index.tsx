import Layout from "@/components/Layout"

const Dashboard = () => {
    return (
        <Layout titlePage="Inicio"> 
            <div>This is a Dashboard page which is private.</div>
        </Layout>
    )
};


// Dashboard.getInitialProps = async props => {
//     console.info('##### Congratulations! You are authorized! ######', props);
//     return {};
// };


export default Dashboard;