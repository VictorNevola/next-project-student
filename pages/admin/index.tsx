import withPrivateRoute from "@/components/privateRoute";

const Dashboard = () => {
    return <div>This is a Dashboard page which is private.</div>;
};


Dashboard.getInitialProps = async props => {
    console.info('##### Congratulations! You are authorized! ######', props);
    return {};
};


export default withPrivateRoute(Dashboard);