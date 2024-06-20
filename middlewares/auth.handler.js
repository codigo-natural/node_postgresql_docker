import boom from '@hapi/boom'
import config from '../config/index.js'

export function checkApiKey(req, res, next) {
    const apiKey = req.headers['api']
    if (apiKey === config.apiKey) {
        next()
    } else {
        next(boom.unauthorized())
    }
}