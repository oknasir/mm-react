export const DataTable = ({data}) => (
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Name</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
