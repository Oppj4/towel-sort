module.exports = function towelSort (matrix = []) {
    let arr2 = [];
    matrix.forEach((item, index)=>{
        index % 2 == 0 ? arr2.push(item) : arr2.push(item.reverse())
    });
    return arr2.flat();
}