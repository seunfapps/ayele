Array.prototype.paginate = function (length) {
    var arr = this;
    length = (length || 1);
    return arr.reduce(function (a, b) {
        if (!a[a.length - 1] || a[a.length - 1].length == length) a.push([]);
        a[a.length - 1].push(b);
        return a;
    }, []);
}