import {data, options, labels} from './store.js'

export default class Datatable {
    constructor(data, options = {}) {
        this.setRows(data)
        this.setOptions(options)
    }

    setRows(arr) {
        arr.forEach( (item) => {
            Object.keys(item).forEach( (k) => {
                if (item[k] === null) {
                    item[k] = ''
                }
            })
        })
        data.set(arr)
        return
    }

    setOptions(opt) {
        options.set({
            sortable:     opt.sortable     ? opt.sortable     : true,
            pagination:   opt.pagination   ? opt.pagination   : true,
            rowCount:     opt.rowCount     ? opt.rowCount     : true,
            search:       opt.search       ? opt.search       : true,
            rowPerPage:   opt.rowPerPage   ? opt.rowPerPage   : 50,
            columnFilter: opt.columnFilter ? opt.columnFilter : false, 
        })
        if (opt.labels) {
            labels.set({
                search:   opt.labels.search   ? opt.labels.search   : 'Search...',
                filter:   opt.labels.filter   ? opt.labels.filter   : 'Filter',
                noRows:   opt.labels.noRows   ? opt.labels.noRows   : 'No entries to found',
                info:     opt.labels.info     ? opt.labels.info     : 'Showing {start} to {end} of {rows} entries',
                previous: opt.labels.previous ? opt.labels.previous : 'Previous',
                next:     opt.labels.next     ? opt.labels.next     : 'Next',                
            })     
        }
    }
}