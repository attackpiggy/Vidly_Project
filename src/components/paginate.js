import _ from 'lodash'


//must install lodash here all the time

export function paginate (items,pageNumber, pageSize){
    const startIndex=(pageNumber -1)* pageSize
    return _(items).slice(startIndex).take(pageSize).value()

}