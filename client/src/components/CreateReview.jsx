import  { useState } from 'react';

function CreateReview() {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the submission logic here, such as sending the review and rating to a server.
    console.log('Review:', review);
    console.log('Rating:', rating);
    // Reset the form fields
    setReview('');
    setRating(0);
  };

  return (
    <div className="container">
      <h2 className='text-center'>Deja tu opinión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">Descripción de la opinión</label>
          <textarea
            className="form-control"
            id="review"
            value={review}
            onChange={handleReviewChange}
            rows="4"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Calificación (1-5) 5 es el Mejor!😃</label>
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
        <button type="submit" className="btn btn-primary">Enviar Opinión</button>
      </form>
    </div>
  );
}

export default CreateReview;
