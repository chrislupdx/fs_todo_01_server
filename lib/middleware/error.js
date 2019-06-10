module.exports = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Server Errror';

    console.error('errrrr', err);

    res
        .status(status)
        .send({ status, message });
}