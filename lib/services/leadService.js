import { supabase } from '../supabase';

// Sanitize string input
function sanitize(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]*>/g, '') // strip HTML
    .replace(/[^\w\s@.,+\-()\/]/gi, '') // allow safe chars
    .trim()
    .slice(0, 500); // max length
}

// Validate Indian mobile number (10 digits)
function validatePhone(phone) {
  const cleaned = phone.replace(/[\s\-+()]/g, '');
  // Accept 10-digit or +91 prefixed
  const match = cleaned.match(/^(?:91)?(\d{10})$/);
  return match ? match[1] : null;
}

export async function createLead(data) {
  const phone = validatePhone(data.phone || '');
  if (!phone) {
    return { success: false, error: 'Invalid phone number. Enter 10-digit mobile number.' };
  }

  const name = sanitize(data.name);
  if (!name || name.length < 2) {
    return { success: false, error: 'Please enter your name.' };
  }

  if (!data.consent) {
    return { success: false, error: 'Please agree to receive updates to proceed.' };
  }

  // Honeypot check — if filled, it's a bot
  if (data.website) {
    // Silently succeed to not tip off bots
    return { success: true, message: 'Thank you! We\'ll contact you soon.' };
  }

  const leadData = {
    name,
    phone,
    car_type: sanitize(data.carType),
    area: sanitize(data.area),
    pincode: sanitize(data.pincode),
    service_interest: sanitize(data.serviceInterest),
    source: sanitize(data.source) || 'website',
    utm_source: sanitize(data.utmSource),
    utm_medium: sanitize(data.utmMedium),
    utm_campaign: sanitize(data.utmCampaign),
    booking_date: sanitize(data.date),
    booking_time: sanitize(data.time),
    consent_given: true,
    status: 'new',
  };

  if (!supabase) {
    // Fallback: log lead data when Supabase isn't configured
    console.log('[LEAD FALLBACK]', JSON.stringify(leadData));
    return {
      success: true,
      message: 'Thank you! We\'ll call you within 30 minutes.',
      fallback: true,
    };
  }

  try {
    const { data: result, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select();

    if (error) {
      console.error('[LEAD ERROR]', error);
      return { success: false, error: 'Something went wrong. Please call us directly.' };
    }

    return {
      success: true,
      message: 'Thank you! We\'ll call you within 30 minutes.',
      id: result?.[0]?.id,
    };
  } catch (err) {
    console.error('[LEAD EXCEPTION]', err);
    return { success: false, error: 'Something went wrong. Please call us directly.' };
  }
}
