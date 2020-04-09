import _ from 'loadash'

export function paginate (items,pageNumber, pageSize){
    const startIndex=(pageNumber -1)* pageSize
    _.slice(items,startIndex)
    _.take()
}