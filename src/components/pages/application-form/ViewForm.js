import {Pagination} from '../../helpers'

function ViewForm() {
  return (
    <div className="App">
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
    </div>
  );
}

export default ViewForm;
