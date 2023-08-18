import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { populatePages, deleteReview } from '../utils/API';
import Aos from 'aos';

function ReviewsByPage({ pageNumber, ratingAvg, ratingScore, createdDate, eraseBtn }) {
  const [reviews, setReviews] = useState([]);
  const loggedInUsername = Auth.getProfile()?.data?.username; // Check if the user is logged in
  useEffect(()=>{
    Aos.init({duration:500})
},[])

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await populatePages(pageNumber);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.log('Error fetching reviews');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchReviews();
  }, [reviews]);

  const handleDeleteReview = async (reviewId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      console.log('User not authenticated');
      return;
    }

    try {
      const response = await deleteReview(reviewId, token);
      if (response.ok) {
        setReviews((prevReviews) => prevReviews.filter((review) => review._id !== reviewId));
        console.log('Review deleted successfully');
      } else {
        console.log('Error deleting review');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const formatDate = (date) => {
    const options = { year: 'numeric', day: 'numeric', month: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // Calculate average rating
  const totalRatings = reviews.reduce((total, review) => total + review.rating, 0);
  const averageRating = reviews.length > 0 ? (totalRatings / reviews.length).toFixed(2) : 0;

  return (

        <div className="container mt-4">
          <h2 className="mb-4 text-center">Reviews </h2>
      
          <p className="mb-4 text-center">{ratingAvg} <br /> <span className='rating-avg'>{averageRating}</span></p>
     
          <ul className="list-group  ">
            {reviews.map((review) => (
              <li key={review._id} className="my-3 p-3 list-group-item shadow-sm border" data-aos="zoom-out">
                <p className="mb-1 text-center">{ratingScore}: {review.rating}</p>
                <p className="mb-1 my-1 rating-username"> {review.username} : {review.review}</p>
                <p className="mb-1 review-date">{createdDate}: {formatDate(review.createdAt)}</p> 
                {loggedInUsername === review.username && (
                    <div className='text-center'>
                         <button className="btn btn-danger review-btn " onClick={() => handleDeleteReview(review._id)}>
                    {eraseBtn}
                  </button>

                    </div>
                 
                )}
              </li>
            ))}
          </ul>
        </div>
    
      
  );
}

export default ReviewsByPage;
