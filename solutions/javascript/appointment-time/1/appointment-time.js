// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  if (now === undefined){
    now = new Date();
  } else {
    now = new Date(now);
  }
  now.setDate((now.getDate() + days));
  return now;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return new Date(appointmentDate).toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let date = new Date(Date.parse(timestamp));
  return {
    year:date.getFullYear(),
    month:date.getMonth(),
    date:date.getDate(),
    hour:date.getHours(),
    minute:date.getMinutes(),
  }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let newAppointment = new Date(Date.parse(timestamp));

  for (const option in options){
    switch(option){
      case 'year':
        newAppointment.setFullYear(options[option]);
        break;
      case 'month':
        newAppointment.setMonth(options[option]);
        break;
      case 'date':
        newAppointment.setDate(options[option]);
        break;
      case 'hour':
        newAppointment.setHours(options[option]);
        break;
      case 'minute':
        newAppointment.setMinutes(options[option]);
        break;
    }
  }
  
  return getAppointmentDetails(newAppointment.toISOString());
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const time1 = new Date(Date.parse(timestampA));
  const time2 = new Date(Date.parse(timestampB));
  if (time1 > time2){
    return Math.round((time1-time2)/1000);
  } else {
    return Math.round((time2-time1)/1000);
  }
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appointment = new Date(Date.parse(appointmentTimestamp));
  const current = new Date(Date.parse(currentTimestamp));
  if ((appointment - current) > 0) {
    return true;
  } else {
    return false;
  }
}
