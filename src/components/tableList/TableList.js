import "./TableList.css";

const TableList = () => {
  return (
    <>
      <div class="container">
        <div class="display">
          <h1>List services</h1>
          <div class="SFCs" id="listSvs">
            <div class="SFC">
              <div class="idService">
                <button>
                  <i class="fa-solid fa-plus"></i>
                </button>
                <p for="idService">
                  ID: <span id="idService"></span>
                </p>
              </div>
              <table class="listService">
                <thead>
                  <tr class="header">
                    <th>Name</th>
                    <th>Node</th>
                    <th>Port</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>name</td>
                    <td>node</td>
                    <td>port</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableList;
