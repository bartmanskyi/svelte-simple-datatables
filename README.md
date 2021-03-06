# Simple-DataTables for Svelte
Development in progress...<br>
Inspired by [fiduswriter/Simple-DataTables](https://github.com/fiduswriter/Simple-DataTables)
and [DataTables](https://datatables.net/)
<br><br>
See demo [here](https://geoflux.io/vincjo/svelte-simple-datatables)
<br><br>
`Datatable` component behavior :
- Fits in its container
- The table has fixed header
- Scrolls vertically



# Install
````apache
npm install svelte-simple-datatables
````

# Sample code
 You must indicate the key of each column in the `<th>` tag.<br>
 Settings definition is optionnal.
````html
<script>
    import { data } from './data.example.js'  
    import { Datatable, rows } from 'svelte-simple-datatables'

    const settings = {
        sortable: true,
        pagination: true,
        rowPerPage: 50,
        rowCount: true,
        search: true,
        columnFilter: true,
    }
</script>

<Datatable settings={settings} data={data}>
    <thead>
        <th data-key="id">ID</th>
        <th data-key="first_name">First Name</th>
        <th data-key="last_name">Last Name</th>
        <th data-key="email">Email</th>
        <th data-key="ip_address">IP Adress</th>
    </thead>
    <tbody>
    {#each $rows as row}
        <tr>
            <td>{row.id}</td>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.email}</td>
            <td>{row.ip_address}</td>
        </tr>
    {/each}
    </tbody>
</Datatable>
````
See result [here](https://geoflux.io/vincjo/svelte-simple-datatables) 

# i18n
Labels can be defined in the settings :
````js
const settings = {
    labels: {
        search: 'Search...',    // search input placeholer
        filter: 'Filter',       // filter inputs placeholder
        noRows: 'No entries to found',
        info: 'Showing {start} to {end} of {rows} entries',
        previous: 'Previous',
        next: 'Next',       
    }
}
````

# Optional blocks
The Datatable includes 3 optional blocks
- PaginationButtons
- PaginationRowCount
- SearchInput

These can be disabled in the settings, imported as components and placed anywhere :
````html
<script>
    import { data } from './data.example.js' 
    import { SearchInput, PaginationButtons, PaginationRowCount, Datatable, rows } from 'svelte-simple-datatables'

    const settings = {
        blocks: {
            searchInput: false, 
            paginationButtons: false,
            paginationRowCount: false,
        }
    }
</script>

<SearchInput/>
<PaginationButtons/>
<PaginationRowCount/>

<Datatable settings={settings} data={data}>...</Datatable>
````

# Style / CSS
Here is an example of CSS, the one used in the demo :<br>
[./example/public/datatable.css](./example/public/datatable.css)

SVG-icons :<br>
[./example/public/assets](./example/public/assets)

# Todo 
- horizontal scroll
- disable functionality for columns without `data-key`
- add option to disable scrolling
- import server side data 