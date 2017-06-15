function Response(data, message) {
    this.version = "1.0";
    this.data = data;
    this.message = message || "success";
    this.datetime = new Date();
}

module.exports = Response;