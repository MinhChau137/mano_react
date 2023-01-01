import { Helmet } from "react-helmet";
import TableList from "../../components/tableList/TableList";
import Menu from "../../components/Menu/Menu";

const CreatePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | Mano</title>
      </Helmet>
      <>
        <Menu />
        <TableList />
      </>
    </>
  );
};
export default CreatePage;
