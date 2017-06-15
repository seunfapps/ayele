function Exception(error, message, httpStatusCode) {
    this.version = "1.0";
    this.error = error;
    this.message = message || "error";
    this.status = httpStatusCode || 500;
    this.datetime = new Date();
}

module.exports = Exception;