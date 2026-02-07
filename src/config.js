export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const CONTACT_API ={
  SUBMIT: `${BASE_URL}/contact/submit/`,
  
}

export const EXPERIENCE_API ={
  WORK: `${BASE_URL}/experience/work-experience/`,
  
}

export const PROJECT_API ={
  PROJECT: `${BASE_URL}/project/projects/`,
  
}

export const FAQS_API ={
  FAQS: `${BASE_URL}/faq/faqs/`,
  ASK: `${BASE_URL}/faq/ask/`,
  ANSWER: (id) => `${BASE_URL}/faqs/answer/${id}/`

}


export const TESTIMONIAL_API ={
  TESTIMONIAL: `${BASE_URL}/testimonial/testimonials/`,
  CREATE: `${BASE_URL}/testimonial/create/`,

}


