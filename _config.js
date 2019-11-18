const { env } = process

module.exports = {
    cfApiKey: env.CF_API_KEY,
    cfZoneId: env.CF_ZONE_ID,
    abipdbKey: env.ABUSEIPDB_KEY,
    limit: env.CF_EVENTS_LIMIT,
}