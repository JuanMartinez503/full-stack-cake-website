import  { useState } from 'react';
import Auth from '../utils/auth'
import {createReview} from '../utils/API'
import ReviewsByPage from './ReviewsByPage';
function CreateReview({pageNumber, reviewName, reviewDescription, reviewRating, createBtn, eraseBtn, ratingScore, ratingAvg,createDate}) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewChange  = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    // You can handle the submission logic here, such as sending the review and rating to a server.
    console.log('Review:', review);
    console.log('Rating:', rating);
    const newReview = {
        review,
        rating,
        username: Auth.getProfile().data.username
    }
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token);
    try {
    const response = await createReview(newReview, token,pageNumber)
        if(response.ok){
            console.log('Review was made');
            setReview('');
            setRating(0);
            console.log(response);
        } else {
            console.log('there was an error with the message');
        }
        
    } catch (err) {
        console.log(err.message);
    }
    // Reset the form fields

  };

  return (
    <div className="container">
        < ReviewsByPage pageNumber={pageNumber} eraseBtn={eraseBtn} ratingAvg={ratingAvg} ratingScore={ratingScore} createdDate={createDate}/>
      <h2 className='text-center'>{reviewName}</h2>
      <form onSubmit={handleReviewSubmit}>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">{reviewDescription}</label>
          <textarea
            className="form-control"
            id="review"
            value={review}
            onChange={handleReviewChange}
            rows="4"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">{reviewRating}</label>
          <div className="rating-wheel">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className={`rating-option mx-2 ${rating === value ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={handleRatingChange}
                /> {' '}
                {value}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="btn login-btn ">{createBtn}</button>
      </form>
    </div>
  );
}

export default CreateReview;
