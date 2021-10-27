import {Pagination, DataTable} from '../../helpers'
import NavigationBar from "../../navs/NavigationBar"

function ViewForm() {
  return (
    <>
      <NavigationBar />

      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
          The current link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">A second link item</a>
        <a href="#" class="list-group-item list-group-item-action">A third link item</a>
        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
      </div>

      <DataTable />
      <Pagination />
    </>
  );
}

export default ViewForm;
