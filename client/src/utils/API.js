export const createUser = (user) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };
  export const login = (user) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };
  export const createReview = (newReview, token, pageNumber) => {
    console.log(newReview);
    return fetch(`/api/reviews/${pageNumber}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newReview),
    });
  };
  export const populatePages = ( pageNumber) => {
    
    return fetch(`/api/reviews/${pageNumber}/public`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  export const deleteReview = (reviewId, token) => {
    return fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  