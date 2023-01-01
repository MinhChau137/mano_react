import { Helmet } from 'react-helmet';
import TableList from "../../components/tableList/TableList";

const CreatePage = () => {
  return(
    <>
      <Helmet>
        <title>Home | Mano</title>
      </Helmet>
      <>
        <TableList/>
      </>
    </>
  )
}
export default CreatePage;